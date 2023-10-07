//
//  MainCoordinator.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 7.10.23.
//

import UIKit
import SchoolDiaryUIComponents

final class MainCoordinator {
    static let shared = MainCoordinator()
    
    fileprivate init() {}
    
    var initialController: UIViewController {
        let signVC = SignViewController().createNavigationController
        return signVC
    }
    
    var currentController: UIViewController? {
        guard let rootController = UIApplication.shared.currentWindow?.rootViewController else { return nil }
        
        var currentController: UIViewController! = rootController
        while currentController.presentedViewController != nil {
            currentController = currentController.presentedViewController
        }
        
        return currentController
    }
}

// MARK: -
// MARK: Open controller methods (push/present)
fileprivate extension MainCoordinator {
    func pushViewController(_ vc: UIViewController, animated: Bool = true) {
        DispatchQueue.main.async { [weak self] in
            (self?.currentController as? UINavigationController)?.pushViewController(vc, animated: animated)
        }
    }
    
    func present(_ vc: UIViewController, animated: Bool = true, completion: (() -> ())? = nil) {
        DispatchQueue.main.async { [weak self] in
            self?.currentController?.present(vc, animated: animated, completion: completion)
        }
    }
}

// MARK: -
// MARK: Open controllers methods
extension MainCoordinator {
    func pushSignController() {
        self.pushViewController(SignViewController(withType: .signScreen))
    }
}

//
//  SignPresenter.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 7.10.23.
//

import UIKit

protocol SignPresenterProtocol {
    var signButtonHorizontalInsets: UIEdgeInsets { get }
    
    func signAction()
}

final class SignPresenter: SignPresenterProtocol {
    private let controllerType: SignControllerType
    
    var signButtonHorizontalInsets: UIEdgeInsets {
        return UIEdgeInsets(horizontal: self.controllerType == .initialScreen ? 100 : 145)
    }
    
    init(withType controllerType: SignControllerType = .initialScreen) {
        self.controllerType = controllerType
    }
    
    func signAction() {
        if self.controllerType == .initialScreen {
            MainCoordinator.shared.pushSignController()
        }
    }
}

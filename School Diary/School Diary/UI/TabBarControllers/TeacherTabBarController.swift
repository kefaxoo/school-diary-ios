//
//  TeacherTabBarController.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 5.11.23.
//

import UIKit

final class TeacherTabBarController: UITabBarController {
    init() {
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.configureViewControllers()
        self.tabBar.tintColor = UIColor(red: 0.35, green: 0.34, blue: 0.84, alpha: 1)
    }
    
    private func configureViewControllers() {
        let teacherVC = TeacherViewController().configureNavigationController(title: "Аккаунт учителя", preferesLargeTitles: false)
        teacherVC.tabBarItem = UITabBarItem(title: "Профиль", image: Constants.Images.profileIcon.image, tag: 1)
        
        let scannerVC = QRScannerViewController()
        scannerVC.tabBarItem = UITabBarItem(title: "Сканнер", image: UIImage(systemName: "qrcode"), tag: 2)
        
        self.viewControllers = [
            teacherVC,
            scannerVC
        ]
    }
    
    override func tabBar(_ tabBar: UITabBar, didSelect item: UITabBarItem) {
        if item.tag == 2 {
            MainCoordinator.shared.presentQRScanner()
        } else {
            super.tabBar(tabBar, didSelect: item)
        }
    }
}

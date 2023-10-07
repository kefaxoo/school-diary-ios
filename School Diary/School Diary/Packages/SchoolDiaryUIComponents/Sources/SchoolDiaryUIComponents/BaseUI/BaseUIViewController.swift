//
//  BaseUIViewController.swift
//
//
//  Created by Bahdan Piatrouski on 7.10.23.
//

import UIKit

open class BaseUIViewController: UIViewController {}

// MARK: -
// MARK: Lifecycle
extension BaseUIViewController {
    open override func viewDidLoad() {
        super.viewDidLoad()
        self.setupInterface()
    }
}

// MARK: -
// MARK: Setup interface methods
extension BaseUIViewController {
    @objc open func setupInterface() {
        self.view.backgroundColor = .systemBackground
        self.setupLayout()
        self.setupConstraints()
    }
    
    @objc open func setupLayout() {}
    @objc open func setupConstraints() {}
}

// MARK: -
// MARK: Keyboard
extension BaseUIViewController {
    open override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        super.touchesBegan(touches, with: event)
        
        self.view.endEditing(true)
    }
}

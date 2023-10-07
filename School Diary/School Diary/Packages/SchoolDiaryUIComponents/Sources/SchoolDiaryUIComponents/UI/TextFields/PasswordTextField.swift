//
//  PasswordTextField.swift
//
//
//  Created by Bahdan Piatrouski on 7.10.23.
//

import UIKit

open class PasswordTextField: UITextField {
    private lazy var hideButton: UIButton = {
        let button = UIButton()
        button.setTitle(nil, for: .normal)
        button.setImage(UIImage(systemName: "eye"), for: .normal)
        button.addTarget(self, action: #selector(hideButtonDidTap), for: .touchUpInside)
        return button
    }()
    
    public override init(frame: CGRect) {
        super.init(frame: frame)
        self.setupTextField()
    }
    
    public required init?(coder: NSCoder) {
        super.init(coder: coder)
        self.setupTextField()
    }
    
    @objc public convenience init(placeholder: String? = nil) {
        self.init()
        self.borderStyle = .roundedRect
        self.placeholder = placeholder
        self.autocapitalizationType = .none
        self.autocorrectionType = .no
        self.setupTextField()
    }
}

// MARK: -
// MARK: Setup textField methods
fileprivate extension PasswordTextField {
    func setupTextField() {
        self.isSecureTextEntry = true
        self.rightView = self.hideButton
        self.rightViewMode = .always
    }
}

// MARK: -
// MARK: Actions
fileprivate extension PasswordTextField {
    @objc private func hideButtonDidTap(_ sender: UIButton) {
        self.isSecureTextEntry.toggle()
        UIView.transition(with: self.hideButton, duration: 0.2, options: .transitionCrossDissolve) { [weak self] in
            self?.hideButton.setImage(UIImage(systemName: (self?.isSecureTextEntry ?? true) ? "eye" : "eye.slash"), for: .normal)
        }
    }
}

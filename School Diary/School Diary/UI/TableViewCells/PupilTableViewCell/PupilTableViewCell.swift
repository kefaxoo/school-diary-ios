//
//  PupilTableViewCell.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 10.12.23.
//

import UIKit
import SchoolDiaryUIComponents

final class PupilTableViewCell: BaseUITableViewCell {
    private lazy var pupilImageView: UIImageView = {
        let imageView = UIImageView()
        imageView.layer.cornerRadius = 75 / 2
        imageView.image = Constants.Images.profileIcon.image
        return imageView
    }()
    
    private lazy var pupilInfoLabel: UILabel = {
        let label = UILabel()
        label.font = .systemFont(ofSize: 17, weight: .semibold)
        return label
    }()
    
    private lazy var pupilPhoneNumber: UILabel = {
        let label = UILabel()
        return label
    }()
    
    private lazy var pupilInfoStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .vertical
        stackView.spacing = 16
        stackView.addArrangedSubview(pupilInfoLabel)
        stackView.addArrangedSubview(pupilPhoneNumber)
        return stackView
    }()
    
    private lazy var contentStackView: UIStackView = {
        let stackView = UIStackView()
        stackView.axis = .horizontal
        stackView.spacing = 16
        stackView.addArrangedSubview(pupilImageView)
        stackView.addArrangedSubview(pupilInfoStackView)
        return stackView
    }()
    
    func configure(pupil: ResponseTeacherPupilModel) {
        self.pupilInfoLabel.text = pupil.nameAndSurname
        self.pupilPhoneNumber.text = pupil.phoneNumber
    }
}

// MARK: - Setup interface
extension PupilTableViewCell {
    override func setupInterface() {
        super.setupInterface()
        self.selectionStyle = .none
        self.backgroundColor = .clear
    }
    
    override func setupLayout() {
        self.contentView.addSubview(contentStackView)
    }
    
    override func setupConstraints() {
        contentStackView.snp.makeConstraints({ $0.edges.equalToSuperview().inset(UIEdgeInsets(horizontal: 32, vertical: 12)) })
        
        pupilImageView.snp.makeConstraints({ $0.height.width.equalTo(75) })
    }
}

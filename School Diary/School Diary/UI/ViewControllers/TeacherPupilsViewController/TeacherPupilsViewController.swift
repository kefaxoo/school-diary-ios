//
//  TeacherPupilsViewController.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 10.12.23.
//

import UIKit
import SchoolDiaryUIComponents

final class TeacherPupilsViewController: BaseUIViewController {
    private lazy var pupilTableView: UITableView = {
        let tableView = UITableView()
        tableView.dataSource = self
        tableView.register(PupilTableViewCell.self)
        tableView.separatorStyle = .none
        tableView.backgroundColor = .clear
        return tableView
    }()
    
    private var pupils = [ResponseTeacherPupilModel]() {
        didSet {
            self.pupilTableView.reloadData()
        }
    }
    
    init() {
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}

// MARK: - Lifecycle
extension TeacherPupilsViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        SchoolsDiaryProvider.shared.teacherPupils { [weak self] pupils in
            self?.pupils = pupils
        } failure: {
            self.navigationController?.popViewController(animated: true)
        }
    }
}

// MARK: - Setup interface methods
extension TeacherPupilsViewController {
    override func setupInterface() {
        super.setupInterface()
        self.setupNavigationController()
    }
    
    override func setupLayout() {
        self.view.addSubview(pupilTableView)
    }
    
    override func setupConstraints() {
        pupilTableView.snp.makeConstraints { make in
            make.top.equalTo(self.view.safeAreaLayoutGuide).offset(24)
            make.leading.trailing.bottom.equalTo(self.view.safeAreaLayoutGuide)
        }
    }
    
    private func setupNavigationController() {
        self.navigationItem.title = "Мой класс"
    }
}

// MARK: - UITableViewDataSource
extension TeacherPupilsViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.pupils.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: PupilTableViewCell.id, for: indexPath)
        (cell as? PupilTableViewCell)?.configure(pupil: self.pupils[indexPath.row])
        return cell
    }
}

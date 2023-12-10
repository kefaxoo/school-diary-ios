var entities = [{
  "id": 1,
  "typeString": "enum",
  "cases": [
    {
  "name": "button case"
}
  ],
  "name": "SettingsTableViewCellType"
},{
  "id": 2,
  "typeString": "class",
  "properties": [
    {
  "name": "var titleLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var actionSwitch: UISwitch",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var actionButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var actionImageView: UIImageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var mainView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var actionClosure: ((_ switchValue: Bool?) -> ())?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var type: SettingsType?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "setupCell(type: SettingsType, action: @escaping((_ switchValue: Bool?) -> ()))",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SettingsTableViewCell",
  "superClass": 133,
  "extensions": [
    3,
    4
  ]
},{
  "id": 5,
  "typeString": "class",
  "properties": [
    {
  "name": "var cellHeight: CGFloat",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var timeLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var subjectLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var homeworkLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var verticalStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var auditoriumLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "prepareForReuse()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configure(withLesson lesson: ResponseLessonModel, forDate: Date)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScheduleTableViewCell",
  "superClass": 133,
  "extensions": [
    6
  ]
},{
  "id": 7,
  "typeString": "class",
  "properties": [
    {
  "name": "var pupilLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var markLabel: LabelInView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let color",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var mainView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dayType: TimetableDaysType?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedMark: MarkType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let color",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var user: ResponseShortUserInfoModel?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "configure(user: ResponseShortUserInfoModel, dayType: TimetableDaysType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateMark(_ mark: MarkType)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PupilMarkTableViewCell",
  "superClass": 133,
  "extensions": [
    8
  ]
},{
  "id": 9,
  "typeString": "class",
  "properties": [
    {
  "name": "var subjectLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var marksLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var verticalStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var averageMarkLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "configure(subject: ResponseSubjectMarkModel)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SubjectMarksTableViewCell",
  "superClass": 133,
  "extensions": [
    10
  ]
},{
  "id": 11,
  "typeString": "class",
  "properties": [
    {
  "name": "var dayLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var baseView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "configure(withDay: TimetableDaysType)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TimetableCollectionViewCell",
  "superClass": 143,
  "extensions": [
    12
  ]
},{
  "id": 13,
  "typeString": "class",
  "properties": [
    {
  "name": "var markLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var baseView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "configure(withMark mark: MarkType)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MarkCollectionViewCell",
  "superClass": 143,
  "extensions": [
    14
  ]
},{
  "id": 15,
  "typeString": "protocol",
  "methods": [
    {
  "name": "reloadData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "popViewController()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "refreshScreen()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reloadMenuButton()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScheduleViewControllerProtocol",
  "superClass": 180
},{
  "id": 16,
  "typeString": "class",
  "properties": [
    {
  "name": "var scheduleTableHeaderView: ScheduleTableHeaderView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var scheduleTableView: UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var leftWeekNavigationButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dayLabel: LabelInView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let weekDaysView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rightWeekNavigationButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var presenter: SchedulePresenterProtocol? required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(dayType: TimetableDaysType, day: Date, isCurrentWeek: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScheduleViewController",
  "superClass": 136,
  "extensions": [
    17,
    18,
    19,
    20,
    21
  ]
},{
  "id": 22,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var lessonsCount : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableViewHeight : CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var navigationTitle : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dayText : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var headerColor : UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isLeftNavigationButtonEnabled : Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isRightNavigationButtonEnabled: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var menuButton : UIMenu?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureCell(_ cell: UITableViewCell, at indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bottomNavigationButtonDidTap(tag: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didSelect(at indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SchedulePresenterProtocol"
},{
  "id": 23,
  "typeString": "class",
  "properties": [
    {
  "name": "var lessons",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var day : TimetableDaysType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var date : Date",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var view : ScheduleViewControllerProtocol?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let days",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let daysArray : [Date]",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var currentMode: ScheduleMenuType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var lessonsCount: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tableViewHeight: CGFloat",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var navigationTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isLeftNavigationButtonEnabled: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isRightNavigationButtonEnabled: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dayText: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var headerColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var menuButton: UIMenu?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let currentUserRole",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let createHometaskAction",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let addMarkAction",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureCell(_ cell: UITableViewCell, at indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "bottomNavigationButtonDidTap(tag: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didSelect(at indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(day: TimetableDaysType, date: Date, isCurrentWeek: Bool, view: ScheduleViewControllerProtocol?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    22
  ],
  "name": "SchedulePresenter"
},{
  "id": 24,
  "typeString": "enum",
  "cases": [
    {
  "name": "initialScreen case signScreen"
}
  ],
  "name": "SignControllerType"
},{
  "id": 25,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var email: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    135
  ],
  "name": "SignViewControllerProtocol"
},{
  "id": 26,
  "typeString": "class",
  "properties": [
    {
  "name": "var signBackgroundImageView: UIImageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var titleLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailTextField: BaseUITextField",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textField",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var passwordTextField: PasswordTextField",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textField",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var resetPasswordButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var signButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var presenter: SignPresenterProtocol required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(withType controllerType: SignControllerType = .initialScreen)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SignViewController",
  "superClass": 136,
  "extensions": [
    27,
    28,
    29
  ]
},{
  "id": 30,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var signButtonHorizontalInsets: UIEdgeInsets",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "signAction()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setView(_ view: SignViewControllerProtocol?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SignPresenterProtocol"
},{
  "id": 31,
  "typeString": "class",
  "properties": [
    {
  "name": "let controllerType: SignControllerType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var view: SignViewControllerProtocol?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var signButtonHorizontalInsets: UIEdgeInsets",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "setView(_ view: SignViewControllerProtocol?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "signAction()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(withType controllerType: SignControllerType = .initialScreen)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    30
  ],
  "name": "SignPresenter"
},{
  "id": 32,
  "typeString": "enum",
  "properties": [
    {
  "name": "var cellType: SettingsTableViewCellType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var buttonImage: UIImage?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var selectionStyle: UITableViewCell.SelectionStyle",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "notifications case signOut var cellType"
}
  ],
  "name": "SettingsType",
  "superClass": 181
},{
  "id": 33,
  "typeString": "class",
  "properties": [
    {
  "name": "var userHeaderTableView: UserSettingsTableHeaderView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var settingsTableView: UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let settings",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SettingsViewController",
  "superClass": 136,
  "extensions": [
    34,
    35,
    36
  ]
},{
  "id": 37,
  "typeString": "protocol",
  "methods": [
    {
  "name": "reloadData()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MarksViewControllerProtocol"
},{
  "id": 38,
  "typeString": "class",
  "properties": [
    {
  "name": "var marksTableHeaderView: MarksTableHeaderView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var marksTableView: UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var presenter: MarksPresenterProtocol",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let presenter",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MarksViewController",
  "superClass": 136,
  "extensions": [
    39,
    40,
    41
  ]
},{
  "id": 42,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var subjectsCount: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "subject(at indexPath: IndexPath) -> ResponseSubjectMarkModel",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MarksPresenterProtocol"
},{
  "id": 43,
  "typeString": "class",
  "properties": [
    {
  "name": "let view: MarksViewControllerProtocol",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var subjects",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var subjectsCount: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "subject(at indexPath: IndexPath) -> ResponseSubjectMarkModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(view: MarksViewControllerProtocol)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    42
  ],
  "name": "MarksPresenter"
},{
  "id": 44,
  "typeString": "class",
  "properties": [
    {
  "name": "var captureSession",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var previewLayer: AVCaptureVideoPreviewLayer",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let previewLayer",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillAppear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupCapture()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "QRScannerViewController",
  "superClass": 136,
  "extensions": [
    45,
    46
  ]
},{
  "id": 47,
  "typeString": "class",
  "properties": [
    {
  "name": "var dateLabel: LabelInView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonThemeLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonThemeTextView: PlaceholderTextView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonThemeStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonThemeContentView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hometaskLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateHometaskLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateHometaskButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var dateHometaskContentView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hometaskInfoLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hometaskInfoTextView: UITextView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let textView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hometaskInfoStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var hometaskInfoContentView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var datePicker: DatePickerView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let datePicker",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let day: Date",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dateType: TimetableDaysType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let lesson: ResponseLessonModel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var selectedDay: Date? required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(with lesson: ResponseLessonModel, day: Date, dateType: TimetableDaysType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LessonInfoViewController",
  "superClass": 136,
  "extensions": [
    48,
    49
  ]
},{
  "id": 50,
  "typeString": "protocol",
  "methods": [
    {
  "name": "popViewController()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reloadData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateMark(at indexPath: IndexPath, with mark: MarkType)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LessonMarksViewControllerProtocol"
},{
  "id": 51,
  "typeString": "class",
  "properties": [
    {
  "name": "var dateLabel: LabelInView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonTypeLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonTypeButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonInfoStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var lessonInfoContentView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pupilLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pupilsTableView: UITableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tableView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var pupilsContentView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let dateType: TimetableDaysType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let day: Date",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let lesson: ResponseLessonModel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var lessonType: LessonType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var lessonTypeMenu: UIMenu",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var actions",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var presenter: LessonMarksPresenterProtocol",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear(_ animated: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(lesson: ResponseLessonModel, date: Date, type dateType: TimetableDaysType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LessonMarksViewController",
  "superClass": 136,
  "extensions": [
    52,
    53,
    54,
    55
  ]
},{
  "id": 56,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var usersCount: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "user(for indexPath: IndexPath) -> ResponseShortUserInfoModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didSelect(at indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LessonMarksPresenterProtocol"
},{
  "id": 57,
  "typeString": "struct",
  "properties": [
    {
  "name": "let userId: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var mark: MarkType",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PupilMarkModel"
},{
  "id": 58,
  "typeString": "class",
  "properties": [
    {
  "name": "let lesson: ResponseLessonModel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let lessonDate: Date",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let view: LessonMarksViewControllerProtocol",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var pupils",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var pupilMarks",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var usersCount: Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "viewWillDisappear()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fetchPupils()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "user(for indexPath: IndexPath) -> ResponseShortUserInfoModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didSelect(at indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(lesson: ResponseLessonModel, date: Date, view: LessonMarksViewControllerProtocol)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    56
  ],
  "name": "LessonMarksPresenter"
},{
  "id": 59,
  "typeString": "protocol",
  "properties": [
    {
  "name": "var daysCount: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isCurrentWeek: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "day(at indexPath: IndexPath) -> TimetableDaysType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(didSelectAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TimetableProtocol"
},{
  "id": 60,
  "typeString": "class",
  "properties": [
    {
  "name": "let days",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var isCurrentWeekPrivate",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var daysCount: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var isCurrentWeek: Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "day(at indexPath: IndexPath) -> TimetableDaysType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(didSelectAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    59
  ],
  "name": "TimetablePresenter"
},{
  "id": 61,
  "typeString": "class",
  "properties": [
    {
  "name": "var navigationTitleLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timetableCollectionView: UICollectionView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let flowLayout",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let cellSide",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let collectionView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var leftWeekNavigationButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var weekDaysLabel: LabelInView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let weekDaysView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var rightWeekNavigationButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var presenter: TimetableProtocol required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TimetableViewController",
  "superClass": 136,
  "extensions": [
    62,
    63,
    64,
    65
  ]
},{
  "id": 66,
  "typeString": "class",
  "properties": [
    {
  "name": "var classButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TeacherViewController",
  "superClass": 75,
  "extensions": [
    67
  ]
},{
  "id": 68,
  "typeString": "protocol",
  "methods": [
    {
  "name": "fetchTeacherInfoIfNeeded()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setView(_ view: PupilViewControllerProtocol?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PupilPresenterProtocol"
},{
  "id": 69,
  "typeString": "class",
  "properties": [
    {
  "name": "var view: PupilViewControllerProtocol?",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "setView(_ view: PupilViewControllerProtocol?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "fetchTeacherInfoIfNeeded()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    68
  ],
  "name": "PupilPresenter"
},{
  "id": 70,
  "typeString": "protocol",
  "methods": [
    {
  "name": "updateTeacherInfo()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    135
  ],
  "name": "PupilViewControllerProtocol"
},{
  "id": 71,
  "typeString": "class",
  "properties": [
    {
  "name": "var teacherInfoModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let presenter: PupilPresenterProtocol required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PupilViewController",
  "superClass": 75,
  "extensions": [
    72,
    73
  ]
},{
  "id": 74,
  "typeString": "enum",
  "cases": [
    {
  "name": "currentUser case pupilInfo"
}
  ],
  "name": "UserViewType"
},{
  "id": 75,
  "typeString": "class",
  "properties": [
    {
  "name": "var userInfoView: UserInfoView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userInfoView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var qrImageView: UIImageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pupilId",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let controllerType: UserViewType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let userInfo: ResponseUserBaseModel? required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(controllerType: UserViewType = .currentUser, userInfo: ResponseUserBaseModel? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UserViewController",
  "superClass": 136,
  "extensions": [
    76,
    77
  ]
},{
  "id": 78,
  "typeString": "class",
  "properties": [
    {
  "name": "var pupilLabel: LabelInView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var marksCollectionView: UICollectionView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let collectionViewLayout",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let collectionView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let marks",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let pupil: ResponseShortUserInfoModel",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let completion: ChooseMarkComp",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(withPupil pupil: ResponseShortUserInfoModel, completion: @escaping ChooseMarkCompletion)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ChooseMarkViewController",
  "superClass": 136,
  "extensions": [
    79,
    80,
    81
  ]
},{
  "id": 82,
  "typeString": "class",
  "properties": [
    {
  "name": "var userImageView: UIImageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let currentUser",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var schoolLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var infoStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var viewType: UserViewType",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var userInfo: ResponseUserBaseModel? required",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init(viewType: UserViewType = .currentUser, userInfo: ResponseUserBaseModel? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UserInfoView",
  "superClass": 131,
  "extensions": [
    83
  ]
},{
  "id": 84,
  "typeString": "class",
  "properties": [
    {
  "name": "var colorTopView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var subjectLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var markLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MarksTableHeaderView",
  "superClass": 131,
  "extensions": [
    85
  ]
},{
  "id": 86,
  "typeString": "class",
  "properties": [
    {
  "name": "var userImageView: UIImageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var teacherLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var teacherNameLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let teacher",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var infoStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "updateTeacherInfo()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TeacherInfoView",
  "superClass": 131,
  "extensions": [
    87
  ]
},{
  "id": 88,
  "typeString": "class",
  "properties": [
    {
  "name": "var userImageView: UIImageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let currentUser",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var emailLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var infoStackView: UIStackView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let stackView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "UserSettingsTableHeaderView",
  "superClass": 131,
  "extensions": [
    89
  ]
},{
  "id": 90,
  "typeString": "class",
  "properties": [
    {
  "name": "var colorTopView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var timeLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var subjectLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var auditoriumLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var topColor: UIColor?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ScheduleTableHeaderView",
  "superClass": 131,
  "extensions": [
    91
  ]
},{
  "id": 92,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureViewControllers()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PupilTabBarController",
  "superClass": 182
},{
  "id": 93,
  "typeString": "class",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "configureViewControllers()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "tabBar(_ tabBar: UITabBar, didSelect item: UITabBarItem)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "TeacherTabBarController",
  "superClass": 182
},{
  "id": 94,
  "typeString": "enum",
  "properties": [
    {
  "name": "var image: UIImage?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "signBackground case userExampleAvatar case userExampleQR case settingsIcon case signOutIcon case profileIcon case menuNavigationButtonIcon case timetableIcon case leftBottomNavigationButtonIcon case rightBottomNavigationButtonIcon case marksIcon var image"
}
  ],
  "name": "Images"
},{
  "id": 95,
  "typeString": "enum",
  "properties": [
    {
  "name": "var isDebug: Bool",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var baseApiUrl: String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "name": "Constants",
  "containedEntities": [
    94
  ]
},{
  "id": 96,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let signVC",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var tabBar: UITabBarController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let currentUser",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let tabBar: UITabBarController? switch currentUser.role",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var var currentController: UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let rootController",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentController: UIViewController!",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let currentTabBar",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "initialController: UIViewController?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "MainCoordinator",
  "superClass": 183,
  "extensions": [
    97,
    98,
    99
  ]
},{
  "id": 100,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var realmConfiguration: Realm.Configuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let configuration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let account",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "signOut() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "SettingsManager"
},{
  "id": 101,
  "typeString": "enum",
  "properties": [
    {
  "name": "var title: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var fullTitle: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var backgroundColor: UIColor",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "monday"
},
    {
  "name": "tuesday"
},
    {
  "name": "wednesday"
},
    {
  "name": "thursday"
},
    {
  "name": "friday"
},
    {
  "name": "saturday"
}
  ],
  "name": "TimetableDaysType",
  "superClass": 181
},{
  "id": 102,
  "typeString": "enum",
  "properties": [
    {
  "name": "var color: UIColor?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var allCasesWithoutZero: [MarkType]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var marks",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "one"
},
    {
  "name": "two"
},
    {
  "name": "three"
},
    {
  "name": "four"
},
    {
  "name": "five"
},
    {
  "name": "six"
},
    {
  "name": "seven"
},
    {
  "name": "eight"
},
    {
  "name": "nine"
},
    {
  "name": "ten"
},
    {
  "name": "none"
}
  ],
  "name": "MarkType",
  "superClass": 181
},{
  "id": 103,
  "typeString": "enum",
  "methods": [
    {
  "name": "actionState(for type: ScheduleMenuType) -> UIAction.State",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "createLesson case addMark case none"
}
  ],
  "name": "ScheduleMenuType"
},{
  "id": 104,
  "typeString": "enum",
  "cases": [
    {
  "name": "pupil"
},
    {
  "name": "teacher"
},
    {
  "name": "admin"
},
    {
  "name": "none"
}
  ],
  "name": "RoleType",
  "superClass": 184
},{
  "id": 105,
  "typeString": "enum",
  "methods": [
    {
  "name": "actionState(for type: LessonType?) -> UIAction.State",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "cases": [
    {
  "name": "lessonInClass"
},
    {
  "name": "additionalLesson"
}
  ],
  "name": "LessonType",
  "superClass": 185
},{
  "id": 106,
  "typeString": "class",
  "properties": [
    {
  "name": "let emailKey",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let expireAtKey",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let accountKey",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let accessTokenKey",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "var email: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var expireAt: Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var accessToken: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var shouldRefreshToken: Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var credentialsKeychain: BaseKeychainModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var accessTokenKeychain: BaseKeychainModel",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "saveCredentials(_ credentials: Credentials)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "saveAcceessToken(_ credentials: Credentials, expireAt: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateAccessToken(_ accessToken: String, expireAt: Int)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "signOut() -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Account"
},{
  "id": 113,
  "typeString": "class",
  "properties": [
    {
  "name": "var hideButton: UIButton",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let button",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "PasswordTextField",
  "superClass": 141,
  "extensions": [
    114,
    115
  ]
},{
  "id": 116,
  "typeString": "class",
  "properties": [
    {
  "name": "var datePicker: UIDatePicker",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let datePicker",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let changeClosure: ((Date) -> ())?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "let dismissClosure: (() -> ())?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var blurEffect: UIBlurEffect",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var blurredEffectView: UIVisualEffectView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var date: Date?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let date else",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var minimumDate: Date?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var pickerHolderView: UIView",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let view",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "initialSetup()",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(changeClosure: ((Date) -> ())? = nil, dismissClosure: (() -> ())? = nil)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "DatePickerView",
  "superClass": 131,
  "extensions": [
    117,
    118
  ]
},{
  "id": 119,
  "typeString": "class",
  "properties": [
    {
  "name": "var mainLabel: UILabel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let label",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var text: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var font: UIFont?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "LabelInView",
  "superClass": 131,
  "extensions": [
    120
  ]
},{
  "id": 121,
  "typeString": "class",
  "properties": [
    {
  "name": "var contentText: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var contentTextColor: UIColor?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var placeholder: String?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var placeholderColor: UIColor?",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "var isPlaceholderActive",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(frame: CGRect, textContainer: NSTextContainer?)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "name": "PlaceholderTextView",
  "superClass": 186,
  "extensions": [
    122
  ]
},{
  "id": 131,
  "typeString": "class",
  "methods": [
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BaseUIView",
  "superClass": 187,
  "extensions": [
    132
  ]
},{
  "id": 133,
  "typeString": "class",
  "methods": [
    {
  "name": "init(style: UITableViewCell.CellStyle, reuseIdentifier: String?)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BaseUITableViewCell",
  "superClass": 188,
  "extensions": [
    134
  ]
},{
  "id": 135,
  "typeString": "protocol",
  "methods": [
    {
  "name": "spinner(isShow: Bool)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BaseUIViewControllerProtocol",
  "superClass": 180
},{
  "id": 136,
  "typeString": "class",
  "name": "BaseUIViewController",
  "superClass": 189,
  "extensions": [
    137,
    138,
    139,
    140
  ]
},{
  "id": 141,
  "typeString": "class",
  "properties": [
    {
  "name": "let padding",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "methods": [
    {
  "name": "textRect(forBounds bounds: CGRect) -> CGRect",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "editingRect(forBounds bounds: CGRect) -> CGRect",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "placeholderRect(forBounds bounds: CGRect) -> CGRect",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(placeholder: String? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BaseUITextField",
  "superClass": 190,
  "extensions": [
    142
  ]
},{
  "id": 143,
  "typeString": "class",
  "methods": [
    {
  "name": "init(frame: CGRect)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "init?(coder: NSCoder)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BaseUICollectionViewCell",
  "superClass": 191,
  "extensions": [
    144
  ]
},{
  "id": 145,
  "typeString": "class",
  "properties": [
    {
  "name": "let shared",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "signIn(email: String, password: String, success: @escaping((ResponseUserModel) -> ()), failure: (() -> ())? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "teacherInfo(success: @escaping((ResponseUserBaseModel) -> ()), failure: (() -> ())? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pupilInfo(id: Int, success: @escaping((ResponseUserBaseModel) -> ()), failure: (() -> ())? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "schedule( for day: TimetableDaysType, shouldReturnHometask: Bool = false, success: @escaping((([ResponseLessonModel]) -> ())), failure: @escaping(() -> ()) )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addHometask(lesson: ResponseLessonModel, date: Date, hometask: String)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getPupilsAtLesson( schoolId: Int, classId: Int, subjectId: Int, lessonDate: Date, success: @escaping(([ResponseShortUserInfoModel]) -> ()), failure: @escaping(() -> ()) )",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "addMark(lesson: ResponseLessonModel, pupil: ResponseShortUserInfoModel, lessonDate: Date, mark: MarkType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "termMarks(success: @escaping(([ResponseSubjectMarkModel]) -> ()), failure: (() -> ())? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init()",
  "type": "instance",
  "accessLevel": "fileprivate"
}
  ],
  "name": "SchoolsDiaryProvider",
  "superClass": 192
},{
  "id": 146,
  "typeString": "enum",
  "cases": [
    {
  "name": "lesson case time case auditorium case hometasks case className"
},
    {
  "name": "classId case subjectId"
}
  ],
  "name": "CodingKeys",
  "superClass": 185
},{
  "id": 147,
  "typeString": "class",
  "properties": [
    {
  "name": "let lesson : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let time : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let auditorium: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hometasks : [ResponseHometaskModel]?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let className : String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let classId : Int?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subjectId : Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseLessonModel",
  "superClass": 193,
  "containedEntities": [
    146
  ]
},{
  "id": 148,
  "typeString": "enum",
  "cases": [
    {
  "name": "roleRawValue"
},
    {
  "name": "accessToken"
}
  ],
  "name": "CodingKeys",
  "superClass": 185
},{
  "id": 149,
  "typeString": "class",
  "properties": [
    {
  "name": "let roleRawValue: Int",
  "type": "instance",
  "accessLevel": "fileprivate"
},
    {
  "name": "let accessToken: ResponseAccessTokenModel",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var role: RoleType",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseUserModel",
  "superClass": 166,
  "containedEntities": [
    148
  ]
},{
  "id": 150,
  "typeString": "enum",
  "cases": [
    {
  "name": "teacherInfo"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 151,
  "typeString": "class",
  "properties": [
    {
  "name": "let teacherInfo: ResponseUserBaseModel",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseTeacherInfoModel",
  "superClass": 193,
  "containedEntities": [
    150
  ]
},{
  "id": 152,
  "typeString": "enum",
  "cases": [
    {
  "name": "onDate case hometask"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 153,
  "typeString": "class",
  "properties": [
    {
  "name": "let onDate: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hometask: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseHometaskModel",
  "superClass": 193,
  "containedEntities": [
    152
  ]
},{
  "id": 154,
  "typeString": "enum",
  "cases": [
    {
  "name": "subjectName case marksRaw"
},
    {
  "name": "averageMark"
}
  ],
  "name": "CodingKeys",
  "superClass": 185
},{
  "id": 155,
  "typeString": "enum",
  "cases": [
    {
  "name": "lessons"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 156,
  "typeString": "class",
  "properties": [
    {
  "name": "let lessons: [ResponseLessonModel]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseLessonsModel",
  "superClass": 193,
  "containedEntities": [
    155
  ]
},{
  "id": 157,
  "typeString": "enum",
  "cases": [
    {
  "name": "accessToken case expireAt"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 158,
  "typeString": "class",
  "properties": [
    {
  "name": "let accessToken: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let expireAt : Int",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseAccessTokenModel",
  "superClass": 193,
  "containedEntities": [
    157
  ]
},{
  "id": 159,
  "typeString": "enum",
  "cases": [
    {
  "name": "pupils"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 160,
  "typeString": "class",
  "properties": [
    {
  "name": "let pupils: [ResponseShortUserInfoModel] required",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponsePupilsModel",
  "superClass": 193,
  "containedEntities": [
    159
  ]
},{
  "id": 161,
  "typeString": "enum",
  "cases": [
    {
  "name": "subjects"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 162,
  "typeString": "class",
  "properties": [
    {
  "name": "let subjects: [ResponseSubjectMarkModel]",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseSubjectMarksModel",
  "superClass": 193,
  "containedEntities": [
    161
  ]
},{
  "id": 163,
  "typeString": "enum",
  "cases": [
    {
  "name": "content"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 164,
  "typeString": "class",
  "properties": [
    {
  "name": "let content: T",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseBaseContentModel",
  "superClass": 195,
  "containedEntities": [
    163
  ]
},{
  "id": 165,
  "typeString": "enum",
  "cases": [
    {
  "name": "name case surname case schoolId case userId case classId case phoneNumber"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 166,
  "typeString": "class",
  "properties": [
    {
  "name": "let name : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let surname : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let schoolId : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userId : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let classId : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let phoneNumber: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameAndSurname: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseUserBaseModel",
  "superClass": 193,
  "containedEntities": [
    165
  ]
},{
  "id": 167,
  "typeString": "enum",
  "cases": [
    {
  "name": "name case surname case userId case markRaw"
}
  ],
  "name": "CodingKeys",
  "superClass": 185
},{
  "id": 168,
  "typeString": "class",
  "properties": [
    {
  "name": "let name : String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let surname: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let userId : Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let markRaw: Int?",
  "type": "instance",
  "accessLevel": "private"
},
    {
  "name": "var mark: MarkType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameAndSurname: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseShortUserInfoModel",
  "superClass": 193,
  "containedEntities": [
    167
  ]
},{
  "id": 169,
  "typeString": "enum",
  "cases": [
    {
  "name": "user"
}
  ],
  "name": "CodingKeys",
  "superClass": 194
},{
  "id": 170,
  "typeString": "class",
  "properties": [
    {
  "name": "let user: ResponseUserModel",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(from decoder: Decoder) throws",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "ResponseSignInModel",
  "superClass": 193,
  "containedEntities": [
    169
  ]
},{
  "id": 171,
  "typeString": "enum",
  "cases": [
    {
  "name": "signIn"
},
    {
  "name": "teacherInfo case pupilInfo"
},
    {
  "name": "schedule"
},
    {
  "name": "addHometask"
},
    {
  "name": "getPupilsAtLesson"
},
    {
  "name": "addMark"
},
    {
  "name": "termMarks"
}
  ],
  "name": "SchoolsDiaryApi",
  "extensions": [
    172
  ]
},{
  "id": 173,
  "typeString": "class",
  "methods": [
    {
  "name": "application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application( _ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions ) -> UISceneConfiguration",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    197
  ],
  "name": "AppDelegate",
  "superClass": 196
},{
  "id": 174,
  "typeString": "class",
  "properties": [
    {
  "name": "let service: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "saveCredentials(_ credentials: Credentials) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "getCredentials(username: String) -> Credentials?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updatePassword(credentials: Credentials) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "deleteAccount(username: String) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(service: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "BaseKeychainModel"
},{
  "id": 175,
  "typeString": "struct",
  "properties": [
    {
  "name": "let username: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let password: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(username: String, password: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(email: String, password: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(email: String, accessToken: String?)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "Credentials"
},{
  "id": 176,
  "typeString": "class",
  "properties": [
    {
  "name": "var window: UIWindow?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidDisconnect(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidBecomeActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillResignActive(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneWillEnterForeground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "sceneDidEnterBackground(_ scene: UIScene)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "SceneDelegate",
  "superClass": 196
},{
  "id": 177,
  "typeString": "class",
  "properties": [
    {
  "name": "var realm: Realm",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "write(object: T)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "read() -> [T]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "update(realmBlock: @escaping((Realm) -> Void))",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "delete(object: T)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "RealmManager",
  "superClass": 198
},{
  "id": 178,
  "typeString": "class",
  "properties": [
    {
  "name": "var roleRawType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var name",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var surname",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var schoolId",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var userId",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var classId",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var phoneNumber",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var role: RoleType",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var nameAndSurname: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "init(user: ResponseUserModel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init(teacher: ResponseUserBaseModel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "init( role: RoleType, name: String, surname: String, schoolId: Int, userId: Int, classId: Int, phoneNumber: String )",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "name": "LocalUserModel",
  "superClass": 199
},{
  "id": 179,
  "typeString": "class",
  "name": "LocalTeacherModel",
  "superClass": 178
},{
  "id": 180,
  "typeString": "class",
  "name": "AnyObject"
},{
  "id": 181,
  "typeString": "class",
  "name": "CaseIterable"
},{
  "id": 182,
  "typeString": "class",
  "name": "UITabBarController"
},{
  "id": 183,
  "typeString": "class",
  "name": "NSObject"
},{
  "id": 184,
  "typeString": "class",
  "name": "Int"
},{
  "id": 185,
  "typeString": "class",
  "name": "String"
},{
  "id": 186,
  "typeString": "class",
  "name": "UITextView"
},{
  "id": 187,
  "typeString": "class",
  "name": "UIView"
},{
  "id": 188,
  "typeString": "class",
  "name": "UITableViewCell",
  "extensions": [
    125
  ]
},{
  "id": 189,
  "typeString": "class",
  "name": "UIViewController",
  "extensions": [
    112,
    130
  ]
},{
  "id": 190,
  "typeString": "class",
  "name": "UITextField",
  "extensions": [
    127
  ]
},{
  "id": 191,
  "typeString": "class",
  "name": "UICollectionViewCell",
  "extensions": [
    111
  ]
},{
  "id": 192,
  "typeString": "class",
  "name": "BaseRestApiProvider"
},{
  "id": 193,
  "typeString": "class",
  "name": "Decodable"
},{
  "id": 194,
  "typeString": "class",
  "name": "CodingKey"
},{
  "id": 195,
  "typeString": "class",
  "name": "DecodablewhereTDecodable"
},{
  "id": 196,
  "typeString": "class",
  "name": "UIResponder"
},{
  "id": 197,
  "typeString": "protocol",
  "name": "UIApplicationDelegate"
},{
  "id": 198,
  "typeString": "class",
  "name": "whereTObject"
},{
  "id": 199,
  "typeString": "class",
  "name": "Object"
},{
  "id": 200,
  "typeString": "protocol",
  "name": "UITableViewDataSource"
},{
  "id": 201,
  "typeString": "protocol",
  "name": "UITableViewDelegate"
},{
  "id": 202,
  "typeString": "protocol",
  "name": "AVCaptureMetadataOutputObjectsDelegate"
},{
  "id": 203,
  "typeString": "protocol",
  "name": "UICollectionViewDataSource"
},{
  "id": 204,
  "typeString": "protocol",
  "name": "UICollectionViewDelegate"
},{
  "id": 205,
  "typeString": "protocol",
  "name": "UITabBarControllerDelegate"
},{
  "id": 206,
  "typeString": "class",
  "name": "Date",
  "extensions": [
    107
  ]
},{
  "id": 207,
  "typeString": "class",
  "name": "UIImageView",
  "extensions": [
    108,
    124
  ]
},{
  "id": 208,
  "typeString": "class",
  "name": "UICollectionView",
  "extensions": [
    109
  ]
},{
  "id": 209,
  "typeString": "class",
  "name": "UIFont",
  "extensions": [
    110
  ]
},{
  "id": 210,
  "typeString": "protocol",
  "name": "UITextViewDelegate"
},{
  "id": 211,
  "typeString": "class",
  "name": "UIEdgeInsets",
  "extensions": [
    123
  ]
},{
  "id": 212,
  "typeString": "class",
  "name": "UIApplication",
  "extensions": [
    126
  ]
},{
  "id": 213,
  "typeString": "class",
  "name": "UITableView",
  "extensions": [
    128
  ]
},{
  "id": 214,
  "typeString": "class",
  "name": "UIColor",
  "extensions": [
    129
  ]
},{
  "id": 215,
  "typeString": "protocol",
  "name": "BaseRestApiEnum"
},{
  "id": 3,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "SettingsTableViewCell"
},{
  "id": 4,
  "typeString": "extension",
  "methods": [
    {
  "name": "controlAction()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "SettingsTableViewCell"
},{
  "id": 6,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "ScheduleTableViewCell"
},{
  "id": 8,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "PupilMarkTableViewCell"
},{
  "id": 10,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "SubjectMarksTableViewCell"
},{
  "id": 12,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "TimetableCollectionViewCell"
},{
  "id": 14,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MarkCollectionViewCell"
},{
  "id": 17,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupNavigationController()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "ScheduleViewController"
},{
  "id": 18,
  "typeString": "extension",
  "methods": [
    {
  "name": "bottomNavigationButtonDidTap(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "ScheduleViewController"
},{
  "id": 19,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    200
  ],
  "extendedEntityName": "ScheduleViewController"
},{
  "id": 20,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    201
  ],
  "extendedEntityName": "ScheduleViewController"
},{
  "id": 21,
  "typeString": "extension",
  "methods": [
    {
  "name": "reloadData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "popViewController()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "refreshScreen()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reloadMenuButton()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    15
  ],
  "extendedEntityName": "ScheduleViewController"
},{
  "id": 27,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "SignViewController"
},{
  "id": 28,
  "typeString": "extension",
  "methods": [
    {
  "name": "signAction(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "SignViewController"
},{
  "id": 29,
  "typeString": "extension",
  "properties": [
    {
  "name": "var email: String?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var password: String?",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    25
  ],
  "extendedEntityName": "SignViewController"
},{
  "id": 34,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "SettingsViewController"
},{
  "id": 35,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    200
  ],
  "extendedEntityName": "SettingsViewController"
},{
  "id": 36,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    201
  ],
  "extendedEntityName": "SettingsViewController"
},{
  "id": 39,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MarksViewController"
},{
  "id": 40,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    200
  ],
  "extendedEntityName": "MarksViewController"
},{
  "id": 41,
  "typeString": "extension",
  "methods": [
    {
  "name": "reloadData()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    37
  ],
  "extendedEntityName": "MarksViewController"
},{
  "id": 45,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "QRScannerViewController"
},{
  "id": 46,
  "typeString": "extension",
  "methods": [
    {
  "name": "metadataOutput(_ output: AVCaptureMetadataOutput, didOutput metadataObjects: [AVMetadataObject], from connection: AVCaptureConnection)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    202
  ],
  "extendedEntityName": "QRScannerViewController"
},{
  "id": 48,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupNavigationController()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "LessonInfoViewController"
},{
  "id": 49,
  "typeString": "extension",
  "methods": [
    {
  "name": "presentDatePicker(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "LessonInfoViewController"
},{
  "id": 52,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupNavigationController()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "LessonMarksViewController"
},{
  "id": 53,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    200
  ],
  "extendedEntityName": "LessonMarksViewController"
},{
  "id": 54,
  "typeString": "extension",
  "methods": [
    {
  "name": "tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    201
  ],
  "extendedEntityName": "LessonMarksViewController"
},{
  "id": 55,
  "typeString": "extension",
  "methods": [
    {
  "name": "popViewController()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "reloadData()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "updateMark(at indexPath: IndexPath, with mark: MarkType)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    50
  ],
  "extendedEntityName": "LessonMarksViewController"
},{
  "id": 62,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupNavigationController()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "TimetableViewController"
},{
  "id": 63,
  "typeString": "extension",
  "methods": [
    {
  "name": "bottomNavigationButtonDidTap(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "TimetableViewController"
},{
  "id": 64,
  "typeString": "extension",
  "methods": [
    {
  "name": "collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    203
  ],
  "extendedEntityName": "TimetableViewController"
},{
  "id": 65,
  "typeString": "extension",
  "methods": [
    {
  "name": "collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    204
  ],
  "extendedEntityName": "TimetableViewController"
},{
  "id": 67,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "TeacherViewController"
},{
  "id": 72,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "PupilViewController"
},{
  "id": 73,
  "typeString": "extension",
  "methods": [
    {
  "name": "updateTeacherInfo()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    70
  ],
  "extendedEntityName": "PupilViewController"
},{
  "id": 76,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupNavigationController()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "UserViewController"
},{
  "id": 77,
  "typeString": "extension",
  "methods": [
    {
  "name": "openSettingsAction()",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "UserViewController"
},{
  "id": 79,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "ChooseMarkViewController"
},{
  "id": 80,
  "typeString": "extension",
  "methods": [
    {
  "name": "collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    203
  ],
  "extendedEntityName": "ChooseMarkViewController"
},{
  "id": 81,
  "typeString": "extension",
  "methods": [
    {
  "name": "collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    204
  ],
  "extendedEntityName": "ChooseMarkViewController"
},{
  "id": 83,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UserInfoView"
},{
  "id": 85,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MarksTableHeaderView"
},{
  "id": 87,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "TeacherInfoView"
},{
  "id": 89,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UserSettingsTableHeaderView"
},{
  "id": 91,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "ScheduleTableHeaderView"
},{
  "id": 97,
  "typeString": "extension",
  "methods": [
    {
  "name": "pushViewController(_ vc: UIViewController, animated: Bool = true)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "present(_ vc: UIViewController, animated: Bool = true, completion: (() -> ())? = nil)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeRootVC(_ vc: UIViewController)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MainCoordinator"
},{
  "id": 98,
  "typeString": "extension",
  "methods": [
    {
  "name": "pushSignController()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pushSettingsController()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeTabBarAsRoot()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "makeSignVCAsRoot()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "presentQRScanner()",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pushUserViewController(userInfo: ResponseUserBaseModel)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pushScheduleViewController(dayType: TimetableDaysType, day: Date, isCurrentWeek: Bool)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pushLessonInfoViewController(lesson: ResponseLessonModel, day: Date, dateType: TimetableDaysType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pushLessonMarksViewController(lesson: ResponseLessonModel, day: Date, dateType: TimetableDaysType)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "pushChooseMarkViewController(pupil: ResponseShortUserInfoModel, completion: @escaping ChooseMarkCompletion)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "MainCoordinator"
},{
  "id": 99,
  "typeString": "extension",
  "methods": [
    {
  "name": "tabBarController(_ tabBarController: UITabBarController, shouldSelect viewController: UIViewController) -> Bool",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    205
  ],
  "extendedEntityName": "MainCoordinator"
},{
  "id": 107,
  "typeString": "extension",
  "properties": [
    {
  "name": "var daysInCurrentWeek: [Date]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var daysInNextWeek: [Date]",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "let nextWeekDay",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var currentWeekForLabel: String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var nextWeekForLabel: String",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "var ddMMFormat: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ddMMyyyyFormat: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var ddMMyyFormat: String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "methods": [
    {
  "name": "daysInWeek(for date: Date) -> [Date]",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "getWeekForLabel(for weekDays: [Date]) -> String",
  "type": "type",
  "accessLevel": "fileprivate"
},
    {
  "name": "day(_ day: TimetableDaysType, isCurrentWeek: Bool) -> Date",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "toFormat(_ dateFormat: String) -> String",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "Date"
},{
  "id": 108,
  "typeString": "extension",
  "methods": [
    {
  "name": "setImage(from link: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setImage(from link: String?, withHeader header: String?)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "setImage(_ image: UIImage?, cacheType: SDImageCacheType)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "UIImageView"
},{
  "id": 109,
  "typeString": "extension",
  "methods": [
    {
  "name": "register(_ cells: AnyClass...)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UICollectionView"
},{
  "id": 110,
  "typeString": "extension",
  "methods": [
    {
  "name": "luckiestGuyRegular(size: CGFloat = 17) -> UIFont?",
  "type": "type",
  "accessLevel": "internal"
},
    {
  "name": "sfMonoRegular(size: CGFloat = 17) -> UIFont?",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIFont"
},{
  "id": 111,
  "typeString": "extension",
  "properties": [
    {
  "name": "var id: String",
  "type": "type",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UICollectionViewCell"
},{
  "id": 112,
  "typeString": "extension",
  "methods": [
    {
  "name": "configureNavigationController(title: String? = nil, preferesLargeTitles: Bool = true) -> UINavigationController",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIViewController"
},{
  "id": 114,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupTextField()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "extendedEntityName": "PasswordTextField"
},{
  "id": 115,
  "typeString": "extension",
  "methods": [
    {
  "name": "hideButtonDidTap(_ sender: UIButton)",
  "type": "instance",
  "accessLevel": "private"
}
  ],
  "extendedEntityName": "PasswordTextField"
},{
  "id": 117,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "DatePickerView"
},{
  "id": 118,
  "typeString": "extension",
  "methods": [
    {
  "name": "tapAction(_ sender: UITapGestureRecognizer)",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "didChangeValueAction(_ sender: UIDatePicker)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "DatePickerView"
},{
  "id": 120,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "LabelInView"
},{
  "id": 122,
  "typeString": "extension",
  "methods": [
    {
  "name": "textViewDidBeginEditing(_ textView: UITextView)",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "textViewDidEndEditing(_ textView: UITextView)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    210
  ],
  "extendedEntityName": "PlaceholderTextView"
},{
  "id": 123,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(horizontal: CGFloat = 0, vertical: CGFloat = 0)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "extendedEntityName": "UIEdgeInsets"
},{
  "id": 124,
  "typeString": "extension",
  "properties": [
    {
  "name": "let imageView",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIImageView"
},{
  "id": 125,
  "typeString": "extension",
  "properties": [
    {
  "name": "var id: String",
  "type": "type",
  "accessLevel": "public"
}
  ],
  "extendedEntityName": "UITableViewCell"
},{
  "id": 126,
  "typeString": "extension",
  "properties": [
    {
  "name": "var currentWindow: UIWindow?",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "extendedEntityName": "UIApplication"
},{
  "id": 127,
  "typeString": "extension",
  "methods": [
    {
  "name": "init(placeholder: String? = nil)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UITextField"
},{
  "id": 128,
  "typeString": "extension",
  "methods": [
    {
  "name": "register(_ cells: AnyClass...)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "extendedEntityName": "UITableView"
},{
  "id": 129,
  "typeString": "extension",
  "methods": [
    {
  "name": "init?(hex: String)",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIColor"
},{
  "id": 130,
  "typeString": "extension",
  "properties": [
    {
  "name": "var createNavigationController: UINavigationController",
  "type": "instance",
  "accessLevel": "public"
},
    {
  "name": "let navigationController",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "extendedEntityName": "UIViewController"
},{
  "id": 132,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "BaseUIView"
},{
  "id": 134,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "BaseUITableViewCell"
},{
  "id": 137,
  "typeString": "extension",
  "methods": [
    {
  "name": "viewDidLoad()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "BaseUIViewController"
},{
  "id": 138,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "BaseUIViewController"
},{
  "id": 139,
  "typeString": "extension",
  "methods": [
    {
  "name": "touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?)",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "BaseUIViewController"
},{
  "id": 140,
  "typeString": "extension",
  "methods": [
    {
  "name": "spinner(isShow: Bool)",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "protocols": [
    135
  ],
  "extendedEntityName": "BaseUIViewController"
},{
  "id": 142,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupTextField()",
  "type": "instance",
  "accessLevel": "public"
}
  ],
  "extendedEntityName": "BaseUITextField"
},{
  "id": 144,
  "typeString": "extension",
  "methods": [
    {
  "name": "setupInterface()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupLayout()",
  "type": "instance",
  "accessLevel": "open"
},
    {
  "name": "setupConstraints()",
  "type": "instance",
  "accessLevel": "open"
}
  ],
  "extendedEntityName": "BaseUICollectionViewCell"
},{
  "id": 172,
  "typeString": "extension",
  "properties": [
    {
  "name": "var baseUrl: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var path: String",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var method: FriendlyURLSession.HTTPMethod",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var headers: FriendlyURLSession.Headers?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var headers",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameters: FriendlyURLSession.Parameters?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var parameters",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let email,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let password): parameters[]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let id): parameters[]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let weekDay,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let shouldReturnHometask): parameters[]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let schoolId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let classId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subjectId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lessonDate): parameters[]",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "var body: JSON?",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let schoolId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let classId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subjectId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let date,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let hometask): return [ : schoolId, :",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let schoolId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let classId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let subjectId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let pupilId,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let lessonDate,",
  "type": "instance",
  "accessLevel": "internal"
},
    {
  "name": "let mark): return [ : schoolId, :",
  "type": "instance",
  "accessLevel": "internal"
}
  ],
  "protocols": [
    215
  ],
  "extendedEntityName": "SchoolsDiaryApi"
}] 
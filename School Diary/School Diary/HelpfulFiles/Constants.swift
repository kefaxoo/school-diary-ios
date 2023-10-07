//
//  Constants.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 7.10.23.
//

import UIKit

enum Constants {
    enum Images {
        case signBackground
        
        var image: UIImage? {
            switch self {
                case .signBackground:
                    return UIImage(named: "SignBackground")
            }
        }
    }
}

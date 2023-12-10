//
//  ResponseTeacherPupilModel.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 10.12.23.
//

import Foundation

final class ResponseTeacherPupilModel: Decodable {
    let name: String
    let surname: String
    let phoneNumber: String
    
    var nameAndSurname: String {
        return "\(surname) \(name)"
    }
    
    enum CodingKeys: CodingKey {
        case name
        case surname
        case phoneNumber
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
     
        self.name = try container.decode(String.self, forKey: .name)
        self.surname = try container.decode(String.self, forKey: .surname)
        self.phoneNumber = try container.decode(String.self, forKey: .phoneNumber)
    }
}

//
//  ResponseUserModel.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 5.11.23.
//

import Foundation

final class ResponseUserModel: Decodable {
    fileprivate let roleRawValue: Int
    
    let name       : String
    let surname    : String
    let schoolId   : Int
    let userId     : Int
    let classId    : Int
    let phoneNumber: String
    let accessToken: ResponseAccessTokenModel
    
    var role: RoleType {
        return RoleType(rawValue: self.roleRawValue) ?? .none
    }
    
    enum CodingKeys: String, CodingKey {
        case roleRawValue = "role"
        case name
        case surname
        case schoolId
        case userId
        case classId
        case phoneNumber
        case accessToken
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        
        self.roleRawValue = try container.decode(Int.self, forKey: .roleRawValue)
        self.name = try container.decode(String.self, forKey: .name)
        self.surname = try container.decode(String.self, forKey: .surname)
        self.schoolId = try container.decode(Int.self, forKey: .schoolId)
        self.userId = try container.decode(Int.self, forKey: .userId)
        self.classId = try container.decode(Int.self, forKey: .classId)
        self.phoneNumber = try container.decode(String.self, forKey: .phoneNumber)
        self.accessToken = try container.decode(ResponseAccessTokenModel.self, forKey: .accessToken)
    }
}

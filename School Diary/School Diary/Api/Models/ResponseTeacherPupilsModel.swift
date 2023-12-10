//
//  ResponseTeacherPupilsModel.swift
//  School Diary
//
//  Created by Bahdan Piatrouski on 10.12.23.
//

import Foundation

final class ResponseTeacherPupilsModel: Decodable {
    let pupils: [ResponseTeacherPupilModel]
    
    enum CodingKeys: CodingKey {
        case pupils
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
     
        self.pupils = try container.decode([ResponseTeacherPupilModel].self, forKey: .pupils)
    }
}

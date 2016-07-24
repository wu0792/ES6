'use strict';

export let firstName = 'Micky'
export let lastName = 'Mouse'

let year = 1958
let area = 'USA'
let company = 'Disney'

export {area, company}

export function getFullName() {
    return `${firstName} ${lastName}`
}

export function setFullName(firstNameNew = firstName, lastNameNew = lastName){
    firstName = firstNameNew
    lastName = lastNameNew
}

class ReleaseInfo{
    constructor(area, year, company, author = 'unknown'){
        this.area = area
        this.year = year
        this.company = company
        this.author = author
    }

    toString(){
        return `area:${this.area},year:${this.year},company:${this.company},author:${this.author}`
    }
}

function getReleaseInfo() {
    return new ReleaseInfo(area, year, company)
}

export {getReleaseInfo as release}

export default function () {
    return 'default function here.'
}
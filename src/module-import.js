'use strict';

const module_export_path = './module-export'

import {firstName, lastName, area, company} from './module-export'
import {getFullName,setFullName, release} from './module-export'
import defaultObject from './module-export' //no braces surround variable

console.log(`first:${firstName},lastName:${lastName},area:${area},company:${company}`)
console.log(`release:${release()},getFullName:${getFullName()}`)
console.log(`default:${defaultObject()}`)

//code below demonstrate import directive actually import the reference
setFullName('Donald', 'Duck')
console.log(`getFullName:${getFullName()}`)
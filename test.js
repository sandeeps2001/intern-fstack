import { getemail } from "./composables/superadmin"
const uemail = getemail()
uemail.value = "Sandy"
console.log(uemail)
console.log("Skipped")
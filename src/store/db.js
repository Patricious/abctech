/**
*
* Kazzy Rantsimele kazzytheman345@gmail.com medium.com/@gentkazzy
*
**/

import fb from "./firebase"
import "firebase/firestore"    
var db = fb.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
export default db
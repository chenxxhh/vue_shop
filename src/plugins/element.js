import Vue from 'vue'

import {Message, Button, Form, FormItem, Input} from "element-ui";
//按需引入

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

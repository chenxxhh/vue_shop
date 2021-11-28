import Vue from 'vue'

import {Message, Button, Form, FormItem, Input ,Container,Header,Aside,Main} from "element-ui";
//按需引入

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.prototype.$message = Message

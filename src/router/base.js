import ClassManage from '@/views/base/ClassManage.vue'
import ModifyPassword from '@/views/base/ModifyPassword.vue'
import StudentManage from '@/views/base/StudentManage.vue'
import TeacherManage from '@/views/base/TeacherManage.vue'


export default [
    {
        path: 'ClassManage',
        name: 'ClassManage',
        components:{
            key:ClassManage
        } 
    },
    {
        path: 'ModifyPassword',
        name: 'ModifyPassword',
        components: {
           key:ModifyPassword
        }
    },
    {
        path: 'StudentManage',
        name: 'StudentManage',
        components:{
            key:StudentManage
        }
    },
    {
        path: 'TeacherManage',
        name: 'TeacherManage',
        components:{
            key:TeacherManage
        } 
    }

]

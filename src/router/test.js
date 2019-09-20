import MakeTestPaper from '@/views/test/MakeTestPaper.vue'
import TestPaperManage from '@/views/test/TestPaperManage.vue'
import TestResult from '@/views/test/TestResult.vue'
import TestSetter from '@/views/test/TestSetter.vue'
import ViewTestPaper from '@/views/test/ViewTestPaper.vue'

export default [
    {
        path: 'MakeTestPaper',
        name:'MakeTestPaper',
        components:{
            key:MakeTestPaper
        } 
    },
    {
        path: 'TestPaperManage',
        name:'TestPaperManage',
        components:{
            key:TestPaperManage
        } 
    },
    {
        path: 'TestResult',
        name:'TestResult',
        components:{
            key:TestResult
        } 
    },
    {
        path: 'TestSetter',
        name:'TestSetter',
        components:{
            key:TestSetter
        } 
    },
    {
        path: 'ViewTestPaper',
        name:'ViewTestPaper',
        components:{
            key:ViewTestPaper
        } 
    },
]
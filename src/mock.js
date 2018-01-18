import Mock from 'mockjs'

export default Mock.mock('http://msg.cn','post',{
	'name':'@name',
	'age|1-100':100,
	'color':'@color'
})
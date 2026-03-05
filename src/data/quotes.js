export const quotesList = [
    '学习25分钟，休息5分钟的番茄工作法有利于保持注意力集中呢',
    '一言也可以投稿哦，投稿邮箱shshouse@mikumod.com',
    '品味当下，笑一笑吧 -兽娘红茶馆',
    '幸福一旦退去，哀伤便一览无余 -兽娘红茶馆',
    
    '与其临渊羡鱼，不如退而结网',
    '学习是唯一一件，投入越多回报越确定的事情',
    '在这个浮躁的世界里，沉下心来学习吧',
    '你读过的书，走过的路，都会成为你的气质',
    '梦想不会发光，发光的是追逐梦想的你',
    '所有的横空出世，都是蓄谋已久',
    '你若盛开，清风自来',
    '学习是一场马拉松，不是百米冲刺',
    '愿你以渺小启程，以伟大结束',
]

export const getRandomQuote = () => {
  const index = Math.floor(Math.random() * quotesList.length)
  return quotesList[index]
}

document.addEventListener('DOMContentLoaded', () => {
  // 留言表单
  const form = document.getElementById('message-form');
  const messageList = document.querySelector('.message-list');

  // 表单提交事件
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = form.querySelector('textarea');
    const content = textarea.value.trim();

    if (content) {
      // 创建新留言元素
      const newMessage = document.createElement('div');
      newMessage.classList.add('single-message');
      newMessage.textContent = content;

      // 将新留言添加到顶部
      messageList.prepend(newMessage);

      // 清空输入框
      textarea.value = '';
    }
  });

  // 如果想做随机健康提醒之类的功能，可在此扩展
  // 例如：
  // const healthTips = [
  //   '多喝水哦！',
  //   '多运动，散步或做柔软操。',
  //   '保证睡眠，规律作息。'
  // ];
  // 随机显示
  // let tipsIndex = Math.floor(Math.random() * healthTips.length);
  // document.getElementById('health-tips').querySelector('h2')
  //       .innerText = healthTips[tipsIndex];
});

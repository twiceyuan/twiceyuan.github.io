/**
 * 工作年限计数器
 * 从 2016-07-01 开始计算，每 200ms 刷新
 * 格式：X年X天HH:MM:SS
 */
(function() {
  const startDate = new Date('2016-07-01T00:00:00+08:00');
  const counterElement = document.getElementById('experience-counter');

  if (!counterElement) {
    return;
  }

  function updateCounter() {
    const now = new Date();
    let diffMs = now - startDate.getTime();

    // 计算各单位
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerYear = msPerDay * 365.25;

    const years = Math.floor(diffMs / msPerYear);
    diffMs %= msPerYear;

    const days = Math.floor(diffMs / msPerDay);
    diffMs %= msPerDay;

    const hours = Math.floor(diffMs / msPerHour);
    diffMs %= msPerHour;

    const minutes = Math.floor(diffMs / msPerMinute);
    diffMs %= msPerMinute;

    const seconds = Math.floor(diffMs / msPerSecond);
    const ms = diffMs % msPerSecond;

    // 格式化时间部分
    const pad = (n) => n.toString().padStart(2, '0');
    const pad3 = (n) => n.toString().padStart(3, '0');
    const timeStr = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad3(ms)}`;

    counterElement.textContent = `${years}年${days}天${timeStr}`;
  }

  // 立即更新一次
  updateCounter();

  // 每 200ms 刷新
  setInterval(updateCounter, 50);
})();

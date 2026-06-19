// public/site-helper.js

(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://aiyouxizh.com.cn',
    keyword: '爱游戏',
    cardTitle: '提示卡片',
    badges: ['热门', '推荐', '新游']
  };

  // 页面提示卡片
  function createTipCard() {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #f0f4f8;
      border: 1px solid #b0c4de;
      border-radius: 8px;
      padding: 12px 16px;
      max-width: 240px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      font-family: sans-serif;
      font-size: 14px;
      z-index: 9999;
    `;
    card.innerHTML = `
      <div style="font-weight:bold;margin-bottom:6px;">${CONFIG.cardTitle}</div>
      <div>欢迎来到 <a href="${CONFIG.siteUrl}" target="_blank" style="color:#1a73e8;">${CONFIG.siteUrl}</a></div>
      <div style="margin-top:6px;color:#444;">关键词：${CONFIG.keyword}</div>
    `;
    document.body.appendChild(card);
  }

  // 关键词徽章
  function createBadges() {
    const container = document.createElement('div');
    container.className = 'keyword-badges';
    container.style.cssText = `
      position: fixed;
      bottom: 100px;
      right: 20px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      z-index: 9998;
    `;
    CONFIG.badges.forEach(text => {
      const badge = document.createElement('span');
      badge.textContent = text;
      badge.style.cssText = `
        display: inline-block;
        background: #e3f2fd;
        color: #0d47a1;
        border: 1px solid #90caf9;
        border-radius: 12px;
        padding: 4px 10px;
        font-size: 12px;
        font-family: sans-serif;
        text-align: center;
      `;
      container.appendChild(badge);
    });
    document.body.appendChild(container);
  }

  // 访问说明
  function createVisitInfo() {
    const info = document.createElement('div');
    info.className = 'visit-info';
    info.style.cssText = `
      position: fixed;
      bottom: 180px;
      right: 20px;
      background: #fff3e0;
      border: 1px solid #ffe0b2;
      border-radius: 8px;
      padding: 10px 14px;
      max-width: 220px;
      font-family: sans-serif;
      font-size: 13px;
      z-index: 9997;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    `;
    info.innerHTML = `
      <div style="font-weight:bold;margin-bottom:4px;">访问说明</div>
      <ul style="margin:0;padding-left:18px;">
        <li>浏览内容前请确认网络环境</li>
        <li>如遇到问题，可刷新页面重试</li>
        <li>更多信息请访问主站</li>
      </ul>
      <div style="margin-top:6px;color:#888;font-size:11px;">关键词：${CONFIG.keyword}</div>
    `;
    document.body.appendChild(info);
  }

  // 初始化（延迟执行避免阻塞渲染）
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      createTipCard();
      createBadges();
      createVisitInfo();
    });
  } else {
    createTipCard();
    createBadges();
    createVisitInfo();
  }
})();
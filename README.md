# Komari-Theme-luminaCustom

基于 [Komari-Theme-LuminaPlus](https://github.com/shanyang242/Komari-Theme-LuminaPlus) 的魔改主题。

## 3.0 变更

- 移除首页节点卡片自动显示的 V4/V6 徽标。
- 首页多线路延迟与丢包展示由 3 条扩展为 6 条。
- Mini 卡丢包柱高度改为随丢包率动态映射（修复固定高度 bug）。
- 多线路 Ping 区域增加 `max-height` 滚动限制，防止线路过多撑爆卡片。
- `CompactTrafficPulse` 交通脉冲点样式缓存优化，减少每秒 tick 重渲染开销。
- 统一 `toTimestamp` 工具函数，消除 `wsStore` / `usePingOverview` 中的重复代码。
- Node 卡片标题链接 hover 时补全操作系统信息。
- CI 构建：test 分支产物标记为 `-test` 测试版，不自动发布 GitHub Release；main 分支走正式发布。
- 版本号升至 3.0。

## 2.0 变更

- 移除首页节点卡片自动显示的 V4/V6 徽标。
- 首页多线路延迟与丢包展示由 3 条扩展为 6 条。
- 主题名称更新为 Komari-Theme-luminaCustom。

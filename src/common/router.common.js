/**
 * 通过 item.path 获取完整路径
 */
export const getFullPath = (basePath, routePath, $router) => {
  let result = basePath
  if (routePath) {
    result = $router.matcher.getRoutes().find((d) => d.path.endsWith(routePath))?.path
  }
  return result
}

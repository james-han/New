# Js_News
Mini-program about 'click a row to open a url,One a post is deleted it should not reappear'
Js News
README
  Project Description
  Name:Js New
  Function:click a row to open a url,One a post is deleted it should not reappear
  Developer:ji wei 
How To Run
  Development environment configuration:the simulator at 
  https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
  API:https://hn.algolia.com/api/v1/search_by_date?query=javascript
Mini App Page Introduce


Item Note
  If realize  ‘The trash button should remove the item form the list, the removed item should not reappear once the app is restarted’ ，API should return a parameter to mark this item has been deleted .
  ‘Clicking on a row should open “story_url” or “url” on a new tab accordingly’ is simulated a ‘bindtap event’ to open “story_url” or “url” on a new tab, If we want to load external links we must use the web-view tag, and the web-view tag can only put one page in Mini Program. 
 

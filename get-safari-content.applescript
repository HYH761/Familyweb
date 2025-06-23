tell application "Safari"
    -- 获取当前活动标签页的URL
    set currentURL to URL of front document
    
    -- 获取页面标题
    set pageTitle to name of front document
    
    -- 获取页面HTML内容
    set pageContent to do JavaScript "document.documentElement.outerHTML" in front document
    
    -- 获取页面文本内容
    set pageText to do JavaScript "document.body.innerText" in front document
    
    return "URL: " & currentURL & return & "标题: " & pageTitle & return & "内容: " & pageText
end tell 
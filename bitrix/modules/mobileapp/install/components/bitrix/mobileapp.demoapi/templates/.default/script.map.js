{"version":3,"file":"script.min.js","sources":["script.js"],"names":["BXMPage","BXMobileApp","UI","Page","BXMobileDemoApi","alert","openSimpleAlert","app","title","button","text","BXMmessage","showConfirm","confirm","buttons","openButtonRightText","buttonParams","callback","name","type","addButtons","button1","openButtonPlus","buttonParamsPlus","lists","openListMarkModeSingle","params","url","dataPath","table_settings","markmode","multiple","searchField","showtitle","footer","data","JSON","stringify","table","Table","show","openListMarkModeMultiple","modal","return_full_mode","okname","markmode_table","openListSelected","selected","elements","selected_markmode_table","openListSection","use_sections","section_table","openListSectionWithAlphabet","alphabet_index","alphabet_index_table","openModalList","openBXTable","TABLE_SETTINGS","cancelname","openListNestedTable","cache","page","showModal","showModalDialog","showNew","loadPageBlank","loadingIndicator","showPopup","PopupLoader","hide","removeButtons","position","showFullScreen","LoadingScreen","pickers","showSinglePicker","items","SelectPicker","values","showMultiPicker","multiselect","default_value","showTimePicker","DatePicker","start_date","format","d","showDatePicker","showDateTimePicker","showDateTimePickerMinAndMax","max_date","min_date","barcodeScanner","BarCodeScanner","open","photo","showSingle","Photo","photos","showGallery","description","docs","demoDocs","id","openDocument","this","camera","source","takePhoto","a","actionSheet","action","ActionSheet","textPanel","TextPanel","setText","setPlusAction","plusAction","setParams","topBar","showTitle","TopBar","setDetail","setDetailText","setIcon","setImage","setTitleCallback","setCallback","resetTitle","setColor","color","setColors","background","refresh","enabled","pullText","releaseText","loadText","Refresh","menu","Menu","image","icon","arrowFlag","slidingPanel","SlidingPanel","hidden_sliding_panel","list2","list4","list3","notifications","textNotifyBar","NotificationBar","message","textAndIconNotifyBar","hideOnTap","align","textAndImageNotifyBar","imageURL","indicatorHeight","textAndImageAndColorTextAndBackgroundNotifyBar","textColor","loaderNotifyBar","useLoader","autoHideTimeout","loaderGrayNotifyBar","loaderGray","fullAlphaNotifyBar","loader","alpha","fiftyPercentAlphaNotifyBar","MultilineNotifyBar","maxLines","contentType","contentEncoding","MultilineAndImageNotifyBar","actionNotifyBar","onHideAfter","onTap","actionNotifyBarMulti","red","groupId","gray"],"mappings":"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"}
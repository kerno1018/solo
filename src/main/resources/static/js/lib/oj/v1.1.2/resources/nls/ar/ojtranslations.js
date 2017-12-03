define({"oj-message":{fatal:"فادح",error:"خطأ",warning:"تحذير",info:"معلومات",confirmation:"تأكيد","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"القيمة ليست بالصيغة المتوقعة.",detail:"أدخل قيمة بالصيغة المتوقعة.","plural-separator":", ",hint:{summary:"المثال: {exampleValue}",detail:"أدخل قيمة بنفس الصيغة الموضحة في هذا المثال: '{exampleValue}'","detail-plural":"أدخل قيمة بنفس الصيغة الموضحة في هذه الأمثلة: '{exampleValue}'"},optionHint:{detail:"القيمة المقبولة للخيار '{propertyName}' هي '{propertyValueValid}'.",
"detail-plural":"القيم المقبولة للخيار '{propertyName}' هي '{propertyValueValid}'."},optionTypesMismatch:{summary:"يلزم وجود قيمة للخيار '{requiredPropertyName}' متى كان الخيار '{propertyName}' معينًا إلى '{propertyValue}'."},optionTypeInvalid:{summary:"لم يتم توفير قيمة من النوع المتوقع للخيار '{propertyName}'."},optionOutOfRange:{summary:"القيمة {propertyValue} خارج نطاق الخيار '{propertyName}'."},optionValueInvalid:{summary:"تم تحديد قيمة '{propertyValue}' غير صالحة للخيار '{propertyName}'."},
number:{decimalFormatMismatch:{summary:"'{value}' ليست بالصيغة الرقمية المتوقعة."},decimalFormatUnsupportedParse:{summary:"decimalFormat: الصيغتان 'short' و'long' غير مدعومتان في تحليل المحول.",detail:"قم بتغيير المكون إلى وضع القراءة فقط readOnly. حيث إن حقول readOnly لا تقوم باستدعاء وظيفة التحليل في المحول."},currencyFormatMismatch:{summary:"'{value}' ليست بصيغة العملة المتوقعة."},percentFormatMismatch:{summary:"'{value}' ليست بصيغة النسبة المئوية المتوقعة."}},datetime:{datetimeOutOfRange:{summary:"القيمة '{value}' خارج النطاق بالنسبة لـ '{propertyName}'.",
detail:"أدخل قيمة بين '{minValue}' و'{maxValue}'."},dateFormatMismatch:{summary:"'{value}' ليست بصيغة التاريخ المتوقعة."},timeFormatMismatch:{summary:"'{value}' ليست بصيغة الوقت المتوقعة."},datetimeFormatMismatch:{summary:"'{value}' ليست بصيغة التاريخ والوقت المتوقعة."},dateToWeekdayMismatch:{summary:"اليوم '{date}' لا يقع في '{weekday}'.",detail:"أدخل يومًا من الأسبوع مطابقًا للتاريخ."}}},"oj-validator":{length:{hint:{min:"أدخل {min} أو المزيد من الأحرف.",max:"أدخل {max} أو أحرفًا أقل.",inRange:"أدخل {min} أو المزيد من الأحرف، وصولاً إلى {max} بحد أقصى.",
exact:"أدخل {length} من الأحرف."},messageDetail:{tooShort:"أدخل {min} أو المزيد من الأحرف، وليس أحرفًا أقل.",tooLong:"أدخل {max} أو أحرفًا أقل، وليس المزيد منها."},messageSummary:{tooShort:"يوجد عدد صغير جدًا من الحروف.",tooLong:"يوجد عدد كبير جدًا من الحروف."}},range:{number:{hint:{min:"أدخل رقمًا أكبر من أو يساوي {min}.",max:"أدخل رقمًا أقل من أو يساوي {max}.",inRange:"أدخل رقمًا بين {min} و{max}."},messageDetail:{rangeUnderflow:"يجب أن يكون الرقم {value} أكبر من أو يساوي {min}.",rangeOverflow:"يجب أن يكون الرقم {value} أقل من أو يساوي {max}."},
messageSummary:{rangeUnderflow:"الرقم قليل للغاية.",rangeOverflow:"الرقم كبير للغاية."}},datetime:{hint:{min:"أدخل تاريخًا ووقتًا في أو بعد {min}.",max:"أدخل تاريخًا ووقتًا في أو قبل {max}.",inRange:"أدخل تاريخًا ووقتًا بين {min} و{max}."},messageDetail:{rangeUnderflow:"يجب أن يكون التاريخ والوقت في أو بعد {min}.",rangeOverflow:"يجب أن يكون التاريخ والوقت في أو قبل {max}."},messageSummary:{rangeUnderflow:"التاريخ والوقت يسبقان الحد الأدنى للتاريخ.",rangeOverflow:"التاريخ والوقت يأتيان بعد الحد الأقصى للتاريخ."}}},
restriction:{date:{messageSummary:"التاريخ {value} من إدخال معطل.",messageDetail:"التاريخ {value} يجب ألا يكون من إدخال معطل."}},regExp:{summary:"الصيغة غير صحيحة.",detail:"يجب أن تتوافق القيمة '{value}' مع هذا النمط: '{pattern}'"},required:{summary:"القيمة مطلوبة.",detail:"يجب إدخال قيمة."}},"oj-editableValue":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputDate":{prevText:"السابق",nextText:"التالي",currentText:"اليوم",weekHeader:"أسبوع",tooltipCalendar:"تحديد التاريخ",tooltipCalendarDisabled:"تحديد التاريخ معطل",
weekText:"أسبوع",datePicker:"منتقي التاريخ",inputHelp:"اضغط على مفتاح للأسفل أو مفتاح للأعلى للوصول إلى التقويم",inputHelpBoth:"اضغط على مفتاح للأسفل أو مفتاح للأعلى للوصول إلى التقويم وعلى Shift + مفتاح للأسفل أو Shift مع مفتاح للأعلى للوصول إلى قائمة الوقت المنسدلة",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{tooltipTime:"تحديد الوقت",
tooltipTimeDisabled:"تحديد الوقت معطل",inputHelp:"اضغط على مفتاح للأسفل أو مفتاح للأعلى للوصول إلى القائمة المنسدلة للوقت",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"يجب أن تتوافق القيمة مع هذا النمط: '{pattern}'"}},"oj-ojFilmStrip":{labelAccArrowNextPage:"الصفحة التالية",labelAccArrowPreviousPage:"الصفحة السابقة",
tipArrowNextPage:"التالي",tipArrowPreviousPage:"السابق"},"oj-ojDataGrid":{accessibleSortAscending:"{id} تم فرزه بترتيب تصاعدي",accessibleSortDescending:"{id} فرز بترتيب تنازلي",accessibleActionableMode:"دخول وضع اتخاذ إجراءات",accessibleNavigationMode:"دخول وضع استكشاف",accessibleSummaryExact:"هذه شبكة بيانات تشتمل على {rownum} من الصفوف و{colnum} من الأعمدة",accessibleSummaryEstimate:"هذه شبكة بيانات تشتمل على عدد غير معروف من الصفوف والأعمدة",accessibleSummaryExpanded:"هناك {num} من الصفوف الموسعة حاليًا",
accessibleInitialFocus:"اضغط على tab للتركيز على الخلية الحالية",accessibleRowExpanded:"الصف موسع",accessibleRowCollapsed:"الصف مطوي",accessibleRowSelected:"تم تحديد الصف {row}",accessibleColumnSelected:"تم تحديد العمود {column}",accessibleStateSelected:"محدد",accessibleMultiCellSelected:"تم تحديد {num} من الخلايا",accessibleRowContext:"الصف {index}",accessibleColumnContext:"العمود {index}",accessibleRowHeaderContext:"رأس الصف {index}",accessibleColumnHeaderContext:"رأس العمود {index}",accessibleLevelContext:"المستوى {level}",
accessibleRangeSelectModeOn:"وضع إضافة نطاق الخلايا المحدد قيد التشغيل",accessibleRangeSelectModeOff:"وضع إضافة نطاق الخلايا المحدد متوقف",accessibleFirstRow:"لقد بلغت الصف الأول",accessibleLastRow:"لقد بلغت الصف الأخير",accessibleFirstColumn:"لقد بلغت العمود الأول",accessibleLastColumn:"لقد بلغت العمود الأخير",accessibleSelectionAffordanceTop:"مرجع أعلى اختيار",accessibleSelectionAffordanceBottom:"مرجع أدنى اختيار",msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد عناصر لعرضها.",labelResize:"إعادة تحجيم",
labelResizeWidth:"تغيير العرض",labelResizeHeight:"تغيير الارتفاع",labelSortRow:"فرز الصف",labelSortRowAsc:"فرز الصف تصاعديًا",labelSortRowDsc:"فرز الصف تنازليًا",labelSortCol:"فرز العمود",labelSortColAsc:"فرز العمود تصاعديًا",labelSortColDsc:"فرز العمود تنازليًا",labelCut:"قص",labelPaste:"لصق",labelEnableNonContiguous:"تمكين الاختيار غير القريب",labelDisableNonContiguous:"تعطيل الاختيار غير القريب"},"oj-ojRowExpander":{accessibleLevelDescription:"المستوى {level}",accessibleRowDescription:"المستوى {level}، الصف {num} من {total}",
accessibleRowExpanded:"الصف موسع",accessibleRowCollapsed:"الصف مطوي",accessibleStateExpanded:"موسع",accessibleStateCollapsed:"مطوي"},"oj-ojListView":{msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد عناصر لعرضها."},"oj-_ojLabel":{tooltipHelp:"تعليمات",tooltipRequired:"مطلوب"},"oj-ojInputNumber":{numberRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"نقص",tooltipIncrement:"زيادة"},
"oj-ojTable":{labelSelectRow:"تحديد صف",labelSelectColumn:"تحديد عمود",labelSort:"فرز",labelSortAsc:"فرز تصاعدي",labelSortDsc:"فرز تنازلي",msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد بيانات لعرضها."},"oj-ojTabs":{labelCut:"قص",labelPasteBefore:"لصق قبل",labelPasteAfter:"لصق بعد",labelRemove:"إزالة",labelReorder:"إعادة ترتيب",removeCueText:"قابل للإزالة"},"oj-ojSelect":{seachField:"حقل البحث",noMatchesFound:"لم يتم العثور على عناصر مطابقة"},"oj-ojSwitch":{SwitchON:"تشغيل",SwitchOFF:"إيقاف"},
"oj-ojTree":{stateLoading:"جارٍ التحميل...",labelNewNode:"نقطة توصيل جديدة",labelMultiSelection:"اختيار متعدد",labelEdit:"تحرير",labelCreate:"تكوين",labelCut:"قص",labelCopy:"نسخ",labelPaste:"لصق",labelRemove:"إزالة",labelRename:"إعادة تسمية",labelNoData:"لا توجد بيانات"},"oj-ojPagingControl":{labelAccPaging:"ترقيم الصفحات",labelAccNavFirstPage:"الصفحة الأولى",labelAccNavLastPage:"الصفحة الأخيرة",labelAccNavNextPage:"الصفحة التالية",labelAccNavPreviousPage:"الصفحة السابقة",labelAccNavPage:"الصفحة",
labelLoadMore:"إظهار المزيد...",labelLoadMoreMaxRows:"تم بلوغ الحد الأقصى البالغ {maxRows} من الصفوف",labelNavInputPage:"الصفحة",labelNavInputPageMax:"من {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeOf:"من",msgItemRangeAtLeast:"على الأقل",msgItemRangeApprox:"تقريبًا",msgItemRangeItems:"عناصر",tipNavInputPage:"انتقال إلى الصفحة",tipNavPageLink:"انتقال إلى الصفحة {pageNum}",tipNavNextPage:"التالي",tipNavPreviousPage:"السابق",tipNavFirstPage:"الأول",tipNavLastPage:"الأخير",pageInvalid:{summary:"قيمة الصفحة المدخلة غير صالحة.",
detail:"الرجاء إدخال قيمة أكبر من 0."},maxPageLinksInvalid:{summary:"قيمة maxPageLinks غير صالحة.",detail:"الرجاء إدخال قيمة أكبر من 4."}},"oj-ojMasonryLayout":{labelCut:"قص",labelPasteBefore:"لصق قبل",labelPasteAfter:"لصق بعد"},"oj-ojChart":{labelDefaultGroupName:"المجموعة {0}",labelSeries:"المتوالية",labelGroup:"المجموعة",labelDate:"التاريخ",labelValue:"القيمة",labelTargetValue:"الهدف",labelX:"س",labelY:"ص",labelZ:"ع",labelPercentage:"النسبة المئوية",labelLow:"منخفض",labelHigh:"مرتفع",labelOpen:"مفتوح",
labelClose:"مغلق",labelVolume:"الحجم",labelMin:"الحد الأدنى",labelMax:"الحد الأقصى",labelOther:"غير ذلك",tooltipPan:"تحريك",tooltipSelect:"تحديد نص متحرك",tooltipZoom:"تكبير/تصغير نص متحرك",componentName:"الرسم البياني"},"oj-dvtBaseGauge":{componentName:"المعيار"},"oj-ojDiagram":{componentName:"الرسم التخطيطي"},"oj-ojLegend":{componentName:"مفتاح الرسم"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"غير ذلك",labelGroup:"المجموعة",labelSize:"الحجم",labelAdditionalData:"بيانات إضافية",componentName:"مربع بعدد حقول ن"},
"oj-ojSparkChart":{componentName:"الرسم البياني"},"oj-ojSunburst":{labelColor:"اللون",labelSize:"الحجم",componentName:"حلقي متدرج"},"oj-ojTagCloud":{componentName:"مجموعة العلامات"},"oj-ojThematicMap":{componentName:"خريطة محددة الموضوع"},"oj-ojTimeline":{componentName:"المخطط الزمني",labelSeries:"المتوالية",tooltipZoomIn:"تقريب",tooltipZoomOut:"إبعاد"},"oj-ojTreemap":{labelColor:"اللون",labelSize:"الحجم",tooltipIsolate:"عزل",tooltipRestore:"استعادة",componentName:"التخطيط الشبكي"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"أ",
labelScalingSuffixMillion:"م",labelScalingSuffixBillion:"ب",labelScalingSuffixTrillion:"ت",labelScalingSuffixQuadrillion:"ك",labelInvalidData:"البيانات غير صالحة",labelNoData:"لا توجد بيانات",labelClearSelection:"مسح الاختيار",labelDataVisualization:"التصور المرئي للبيانات",messageNotReadyToRender:{summary:"يجب إرفاق هذا المكون بشبكة فرعية مرئية من DOM قبل التصيير."},stateSelected:"محدد",stateUnselected:"غير محدد",stateMaximized:"مكبر",stateMinimized:"مصغر",stateExpanded:"موسع",stateCollapsed:"مطوي",
stateIsolated:"معزول",stateHidden:"مخفي",stateVisible:"مرئي",stateDrillable:"قابل للتنقل",labelAndValue:"{0}: {1}"},"oj-ojNavigationList":{defaultRootLabel:"قائمة الاستكشاف",hierMenuBtnLabel:"زر القائمة المتدرجة",selectedLabel:"محدد",previousIcon:"السابق",msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد عناصر لعرضها."},"oj-ojSlider":{noValue:"لا يشتمل ojSlider على قيمة",maxMin:"يجب ألا تكون قيمة الحد الأقصى أقل من قيمة الحد الأدنى",valueRange:"يجب أن تكون القيمة في النطاق من الأدنى إلى الأقصى",
optionNum:"خيار {option} ليس رقمًا",invalidStep:"الخطوة غير صالحة؛ يجب أن تكون الخطوة > 0"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"الدخول في القائمة المنبثقة. اضغط على F6 للتنقل بين القائمة المنبثقة وعنصر التحكم المقترن.",ariaLiveRegionInitialFocusNone:"القائمة المنبثقة مفتوحة. اضغط على F6 للتنقل بين القائمة المنبثقة وعنصر التحكم المقترن.",ariaLiveRegionInitialFocusFirstFocusableTouch:"الدخول في القائمة المنبثقة. يمكن إغلاق القائمة المنبثقة عبر الانتقال إلى آخر ارتباط في القائمة.",
ariaLiveRegionInitialFocusNoneTouch:"القائمة المنبثقة مفتوحة.  انتقل إلى الارتباط التالي لتحديد موضع التركيز في القائمة.",ariaFocusSkipLink:"اضغط ضغطًا مزدوجًا للانتقال إلى القائمة المنبثقة المفتوحة.",ariaCloseSkipLink:"اضغط ضغطًا مزدوجًا لإغلاق القائمة المنبثقة المفتوحة."},"oj-ojMenu":{ariaLiveRegionInitialFocusMenuTouch:"الدخول في القائمة. يمكن إغلاق القائمة دون تحديد عنصر منها عبر الانتقال إلى الارتباط الذي يلي القائمة.",ariaLiveRegionInitialFocusNoneTouch:"تم فتح القائمة.  انتقل إلى الارتباط التالي لتحديد موضع التركيز في القائمة.",
"ariaPreceding Link":"انتقل إلى الأمام للوصول إلى القائمة المفتوحة.",ariaFocusSkipLink:"اضغط ضغطًا مزدوجًا للانتقال إلى القائمة المفتوحة.",ariaCloseSkipLink:"اضغط ضغطًا مزدوجًا لإغلاق القائمة المفتوحة."}});
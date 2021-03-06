$(function () {

    $("#jqGrid").jqGrid({
        // url: baseURL + 'produce/capacity/list',
        datatype: "local",
        data: vm.myInfoData,
        width: "100%",
        colModel: [
            {label: '序号', name: 'id', index: 'id', formatter: "Integer", width: 50, key: true},
            {label: '主要生产单元名称', name: 'name', index: 'name', width: 150},
            {label: '主要工艺名称', name: 'technologyName', index: 'technologyName', width: 100},
            {label: '生产设施名称', name: 'facName', index: 'facName', width: 100},
            {label: '生产设施编号', name: 'facId', index: 'facId', width: 140},

            /*ParamName*/
            {label: '参数名称', name: 'paramName', index: 'paramName', width: 80},
            {label: '设计值', name: 'paramDesignValue', index: 'paramDesignValue', width: 80},
            {label: '计量单位', name: 'paramUnit', index: 'paramUnit', width: 80},
            {label: '其他设施参数信息', name: 'otherParamInfo', index: 'otherParamInfo', width: 150},

            {label: '其他设施信息', name: 'otherFacNum', index: 'otherFacNum', width: 100},
            {label: '产品名称', name: 'productName', index: 'productName', width: 100},
            {label: '计量单位', name: 'unit', index: 'unit', width: 80},
            {label: '产品设计产能', name: 'designCapacity', index: 'designCapacity', width: 100},
            {label: '设计年运行时间(h)', name: 'runTime', index: 'runTime', width: 140},
            {label: '其他产品信息', name: 'otherInfo', index: 'otherInfo', width: 100},
            {label: '其他工艺信息', name: 'otherTechnoInfo', index: 'otherTechnoInfo', width: 100},
        ],
        shrinkToFit: false,
        autoScroll: true,
        altRows: true,
        altclass: "differ",
        viewrecords: true,
        height: "100%",
        rowNum: 15,
        rowList: [10, 15, 30, 50],
        rownumbers: true,
        rownumWidth: 25,
        autowidth: true,
        multiselect: true,

        pager: "#jqGridPager",
        jsonReader: {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames: {
            page: "page",
            rows: "limit",
            order: "order"
        },
        gridComplete: function () {
            //隐藏grid底部滚动条
            //$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "scroll" });
        }
    });
    $("#jqGrid").jqGrid('setGroupHeaders', {
        useColSpanStyle: true,
        groupHeaders: [
            {startColumnName: 'paramName', numberOfColumns: 4, titleText: '参数名称'}
        ]
    });
});

var vm = new Vue({
    el: '#rrapp',
    data: {
        showList: true,
        title: null,
        tempId: null,
        info: {},

        optt:[],
        opttt:[],
        myInfoData: [
            {
                "id": 1,
                "name": "公用单元",
                "technologyName": "发电机组",
                "facName": "三号反应堆",
                "facId": "865533039113760",
                /*ParamName*/
                "paramName": "容量",
                "paramDesignValue": "100",
                "paramUnit": "MW",
                "otherParamInfo": "--",

                "otherFacNum": "--",
                "productName": "其他",
                "unit": "其他",
                "designCapacity": "5000",
                "runTime": "8760",
                "otherInfo": "--",
                "otherTechnoInfo": "--"
            },
            {
                "id": 2,
                "name": "烧结",
                "technologyName": "带式烧结",
                "facName": "带式烧结机",
                "facId": "865533039113760",
                /*ParamName*/
                "paramName": "烧结台车面积",
                "paramDesignValue": "100",
                "paramUnit": "m2",
                "otherParamInfo": "--",

                "otherFacNum": "--",
                "productName": "烧结矿",
                "unit": "万t/a",
                "designCapacity": "5000",
                "runTime": "8760",
                "otherInfo": "--",
                "otherTechnoInfo": "--"
            },
            {
                "id": 3,
                "name": "公用单元",
                "technologyName": "发电",
                "facName": "发电机组",
                "facId": "865533039113760",
                /*ParamName*/
                "paramName": "发电机组",
                "paramDesignValue": "100",
                "paramUnit": "t/a",
                "otherParamInfo": "--",

                "otherFacNum": "--",
                "productName": "------",
                "unit": "------",
                "designCapacity": "5000",
                "runTime": "8760",
                "otherInfo": "--",
                "otherTechnoInfo": "--"
            },
            {
                "id": 4,
                "name": "公用单元",
                "technologyName": "发电机组",
                "facName": "三号反应堆",
                "facId": "865533039113760",
                /*ParamName*/
                "paramName": "容量",
                "paramDesignValue": "100",
                "paramUnit": "MW",
                "otherParamInfo": "--",

                "otherFacNum": "--",
                "productName": "其他",
                "unit": "其他",
                "designCapacity": "5000",
                "runTime": "8760",
                "otherInfo": "--",
                "otherTechnoInfo": "--"
            }
        ],

        type:["请选择","公用单元","其他","原料系统","炼钢","炼铁","烧结","球团","轧钢"],
        item2:[["请选择"],["请选择","供热","其他工艺","发电"],["请选择","其他"],["请选择","其他","其他工艺","机械化原料场","非机械化原料场"],["请选择","其他工艺","电炉炼钢","转炉炼钢"],["请选择","其他工艺","高炉炼铁"],
            ["请选择","其他工艺","带式烧结","步进式烧结"],["请选择","其他工艺","带式焙烧机","竖炉","链篦机-回转窑"],["请选择","其他工艺","冷轧","热轧"]],
        item3:["请选择","燃气锅炉","燃煤锅炉","燃油锅炉","发电机组","燃气-蒸汽联合循环发电机组","其他"],
        item4:[["请选择"],["请选择","其他","蒸汽量","燃油锅炉","发电机组","燃气-蒸汽联合循环发电机组","其他"]],
        item5:[["请选择"],["MW","m2","m3","t","t/(m3.d)","t/a","t/d","t/h.m2","万t/a","其他"],["MW"]],
        item6:[["请选择"],["请选择","------","其他"]],
        item7:[["请选择"],["请选择","------","其他"]]
    },
    methods: {
        query: function () {
            vm.reload();
        },
        add: function () {
            vm.showList = false;
            vm.title = "新增";
            vm.info = {};
        },
        update: function (event) {
            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.showList = false;
            vm.title = "修改";
            vm.tempId = id[0];
            vm.getInfo(id[0] - 1)
        },
        saveOrUpdate: function (event) {
            var item = {
                // "id":vm.myInfoData.length + 1,
                "name": vm.info.name,
                "technologyName": vm.info.technologyName,
                "facName": vm.info.facName,
                "facId": vm.info.facId,
                /*ParamName*/
                "paramName": vm.info.paramName,
                "paramDesignValue": vm.info.paramDesignValue,
                "paramUnit": vm.info.paramUnit,
                "otherParamInfo": vm.info.otherParamInfo,

                "otherFacNum": vm.info.otherFacNum,
                "productName": vm.info.productName,
                "unit": vm.info.unit,
                "designCapacity": vm.info.designCapacity,
                "runTime": vm.info.runTime,
                "otherInfo": vm.info.otherInfo,
                "otherTechnoInfo": vm.info.otherTechnoInfo
            };
            if (vm.info.id == null) {
                item.id = vm.myInfoData.length + 1;
                vm.myInfoData.push(item)
            } else {
                item.id = vm.info.id;
                //删掉选中的
                vm.myInfoData.splice(vm.tempId -1, 1);
                //将修改后插入刚刚删除的位置
                vm.myInfoData.splice(vm.tempId -1, 0,item);
            }
            vm.reload();
            /*$('#btnSaveOrUpdate').button('loading').delay(1000).queue(function() {
                var url = vm.info.id == null ? "produce/capacity/save" : "produce/capacity/update";
                $.ajax({
                    type: "POST",
                    url: baseURL + url,
                    contentType: "application/json",
                    data: JSON.stringify(vm.info),
                    success: function(r){
                        if(r.code === 0){
                             layer.msg("操作成功", {icon: 1});
                             vm.reload();
                             $('#btnSaveOrUpdate').button('reset');
                             $('#btnSaveOrUpdate').dequeue();
                        }else{
                            layer.alert(r.msg);
                            $('#btnSaveOrUpdate').button('reset');
                            $('#btnSaveOrUpdate').dequeue();
                        }
                    }
                });
            });*/
        },
        del: function (event) {
            var Ids = getSelectedRows();
            if (Ids == null) {
                return;
            }
            for (var i = 0; i < Ids.length; i++) {
                console.log(Ids[i]);
                vm.myInfoData.splice(Ids[i] - 1, 1);
            }
            vm.reload()

            /*var lock = false;
            layer.confirm('确定要删除选中的记录？', {
                btn: ['确定','取消'] //按钮
            }, function(){
               if(!lock) {
                    lock = true;
                    $.ajax({
                        type: "POST",
                        url: baseURL + "produce/capacity/delete",
                        contentType: "application/json",
                        data: JSON.stringify(Ids),
                        success: function(r){
                            if(r.code == 0){
                                layer.msg("操作成功", {icon: 1});
                                $("#jqGrid").trigger("reloadGrid");
                            }else{
                                layer.alert(r.msg);
                            }
                        }
                    });
                }
             }, function(){
             });*/
        },
        getInfo: function (infoId) {

            vm.info = vm.myInfoData[infoId];
            /*$.get(baseURL + "produce/capacity/info/"+infoId, function(r){
                vm.info = r.info;

                console.log("请求地址为：" + baseURL + "produce/capacity/info/"+infoId);
                console.log(r.info)
            });*/
        },
        reload: function (event) {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                page: page
            }).trigger("reloadGrid");
        }
    }
});
/*
*  1 2 级联
* */
function changeWndNum(val) {
    vm.optt=[];
    console.log(val);
    for (var x = 0; x < vm.type.length; x++) {
        if (vm.type[x] == val.value){
            for(var i=0;i<vm.item2[x].length;i++)
            {
                vm.optt.push(vm.item2[x][i])
            }
        }
    }
}
/*
*  1 3 级联
* */
function changeWndNumm(val) {
    vm.opttt=[];
    if(val.value==1||val.value==2||val.value==3)
    {
        for(var i=4;i<7;i++)
        {
            vm.opttt.push(i)
        }
    }
    if(val.value==4||val.value==5||val.value==6)
    {
        for(var i=7;i<10;i++)
        {
            vm.opttt.push(i)
        }
    }
}
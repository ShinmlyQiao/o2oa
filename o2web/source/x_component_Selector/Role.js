MWF.xDesktop.requireApp("Selector", "Person", null, false);
MWF.xApplication.Selector.Role = new Class({
	Extends: MWF.xApplication.Selector.Person,
    options: {
        "style": "default",
        "count": 0,
        "title": MWF.xApplication.Selector.LP.selectRole,
        "groups": [],
        "roles": [],
        "values": [],
        "names": []
    },

    _listItemByKey: function(callback, failure, key){
        if (this.options.units.length || this.options.units.roles) key = {"key": key, "groupList": this.options.groupList, "roleList": this.options.roleList};
        this.orgAction.listRoleByKey(function(json){
            if (callback) callback.apply(this, [json]);
        }.bind(this), failure, key);
    },
    _getItem: function(callback, failure, id, async){
        this.orgAction.getRole(function(json){
            if (callback) callback.apply(this, [json]);
        }.bind(this), failure, ((typeOf(id)==="string") ? id : id.distinguishedName), async);
    },
    _newItemSelected: function(data, selector, item){
        return new MWF.xApplication.Selector.Role.ItemSelected(data, selector, item)
    },
    _listItemByPinyin: function(callback, failure, key){
        if (this.options.units.length || this.options.units.roles) key = {"key": key, "groupList": this.options.groupList, "roleList": this.options.roleList};
        this.orgAction.listRoleByPinyin(function(json){
            if (callback) callback.apply(this, [json]);
        }.bind(this), failure, key);
    },
    _newItem: function(data, selector, container){
        return new MWF.xApplication.Selector.Role.Item(data, selector, container);
    },
    _listItemNext: function(last, count, callback){
        this.orgAction.listRoleNext(last, count, function(json){
            if (callback) callback.apply(this, [json]);
        }.bind(this));
    },
    _getChildrenItemIds: function(data){
        return data.roleList;
    }
});
MWF.xApplication.Selector.Role.Item = new Class({
	Extends: MWF.xApplication.Selector.Person.Item,
    _getShowName: function(){
        return this.data.name;
    },
    _setIcon: function(){
        this.iconNode.setStyle("background-image", "url("+"/x_component_Selector/$Selector/default/icon/roleicon.png)");
    }
});

MWF.xApplication.Selector.Role.ItemSelected = new Class({
	Extends: MWF.xApplication.Selector.Person.ItemSelected,
    _getShowName: function(){
        return this.data.name;
    },
    _setIcon: function(){
        this.iconNode.setStyle("background-image", "url("+"/x_component_Selector/$Selector/default/icon/roleicon.png)");
    }
});
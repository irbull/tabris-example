tabris.registerWidget("Foo", {
  _type: "rwt.widgets.Button",
  _initProperties: {style: ["CHECK"]},
  _events: {
    select: {
      name: "Selection",
      listen: function(state) {
        this._nativeListen("Selection", state);
      },
      trigger: function(event) {
        this.trigger("select", this, event);
      }
    }
  },
  _properties: {
    alignment: {type: ["choice", ["left", "right", "center"]], default: "center"},
    image: {type: "image", default: null},
    jabber: {type: "string", default: ""}
  }
});


var page = tabris.create("Page", {
  title: "Push Buttons",
  topLevel: true
});

var count = 0;

tabris.create("Foo", {
  layoutData: {left: 10, top: 10},
  jabber: "Button"
}).on("select", function() {
  this.set("jabber", "Pressed " + (++count) + " times");
}).appendTo(page);

page.open();

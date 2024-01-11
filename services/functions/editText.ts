// import sanitizeHtml from 'sanitize-html'
// import parse from 'html-dom-parser'

// const editText = function (str, filter = {
//   notp: false,
//   clear: false,
//   slice: 0,
//   paragraph: false,
//   html: false,
//   noLink: false
// }) {
//   // console.log('=42a2ab=', filter)

//   if (!str) { str = "" }

//   if (filter?.notp && str == "") {
//     return str
//   }

//   let out = str.trim()

//   if (filter?.clear) {
//     out = out.replace(new RegExp("</p><p>", 'gi'), "</p><p>\n")
//     out = sanitizeHtmlPosts(out, { allowedTags: [], allowedAttributes: {} })
//   }

//   if (filter.slice) {
//     out = sliceString(out, filter.slice)
//   }


//   if (filter.paragraph) {
//     out = paragraph(out).trim()
//   }

//   if (filter.html) {
//     // if (!filter.noLink) {
//     //     out = this.findLink(out)
//     // }
//     out = stringToHtml(out)
//   }
//   // console.log(out)
//   return out
// }

// const checkChildren = function (data) {
//   var ret = {}
//   if (data.type == "tag") {
//     ret.tag = data.name
//     ret.data = data.attribs
//   } else if (data.type == "text") {
//     return data.data
//   }
//   ret.children = []
//   if (data.children && data.children.length != 0) {
//     for (let item of data.children) {
//       ret.children.push(checkChildren(item))
//     }
//   }
//   return ret;
// }


// const stringToHtml = function (data) {
//   data = "<div>" + data + "</div>"
//   const res = parse(data);
//   let ret = {
//     tag: "",
//     data: "",
//     children: []
//   }
//   for (let item of res) {
//     if (item.type == "tag") {
//       ret.tag = item.name
//       ret.data = item.attribs
//     } else if (item.type == "text") {
//       ret.tag = item.data
//       ret.data = null
//     }
//     if (item.children && item.children.length != 0) {
//       for (let item2 of item.children) {
//         ret.children.push(checkChildren(item2))
//       }
//     }
//   }
//   return ret;
// }

// const sanitizeHtmlPosts = function (data, filter) {
//   let defFilter = {
//     allowedTags: ['p', 'a'],
//     allowedAttributes: {
//       'a': ['href', 'target', 'rel']
//     },
//   }

//   if (filter) {
//     defFilter = filter
//   }

//   const clean = sanitizeHtml(data, defFilter);

//   return clean
// }

// const sliceString = function (str, number = 66) {
//   let sliceStr = '';
//   if (str.length >= number) {
//     sliceStr = `${str.slice(0, number)} ...`;
//   } else {
//     sliceStr = str;
//   }
//   return sliceStr;
// };

// const paragraph = function (str) {
//   let textTag = str;
//   textTag = textTag.replace(new RegExp("\n\n", 'g'), "\n").split("\n");
//   let res = "";
//   for (let item of textTag) {
//     res += "<p>" + item + "</p>";
//   }
//   return res;
// }

// export { editText }
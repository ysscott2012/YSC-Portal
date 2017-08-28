

module.exports = {
  // save data
  save: function (schema, object, callback) {
    console.log(schema);
  },
  // delete  data
  delete: function (schema, object, callback) {

  },
  // find  data
  find: function (schema, filter, callback) {
    schema.find(filter, function(err, objects){
      if (err) callback({message:"find object error", success: false, objects: {}})
      else callback({message:"find object successfully", success: true, objects: objects})
    })
  }
}

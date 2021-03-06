/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ugh.Empty', null, global);
goog.exportSymbol('proto.ugh.Issue', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ugh.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ugh.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ugh.Empty.displayName = 'proto.ugh.Empty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ugh.Issue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ugh.Issue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ugh.Issue.displayName = 'proto.ugh.Issue';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ugh.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.ugh.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ugh.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ugh.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ugh.Empty}
 */
proto.ugh.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ugh.Empty;
  return proto.ugh.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ugh.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ugh.Empty}
 */
proto.ugh.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ugh.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ugh.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ugh.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ugh.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ugh.Issue.prototype.toObject = function(opt_includeInstance) {
  return proto.ugh.Issue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ugh.Issue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ugh.Issue.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    incidentType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    incidentDatetime: jspb.Message.getFieldWithDefault(msg, 3, ""),
    incidentDescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cnxn: jspb.Message.getFieldWithDefault(msg, 5, ""),
    workflow: jspb.Message.getFieldWithDefault(msg, 6, ""),
    worklet: jspb.Message.getFieldWithDefault(msg, 7, ""),
    session: jspb.Message.getFieldWithDefault(msg, 8, ""),
    folder: jspb.Message.getFieldWithDefault(msg, 9, ""),
    resolverName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timeToResolve: jspb.Message.getFieldWithDefault(msg, 11, ""),
    resolutionDetails: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ugh.Issue}
 */
proto.ugh.Issue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ugh.Issue;
  return proto.ugh.Issue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ugh.Issue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ugh.Issue}
 */
proto.ugh.Issue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIncidentType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIncidentDatetime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIncidentDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCnxn(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflow(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorklet(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFolder(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolverName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeToResolve(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolutionDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ugh.Issue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ugh.Issue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ugh.Issue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ugh.Issue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getIncidentType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIncidentDatetime();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIncidentDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCnxn();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWorkflow();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getWorklet();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getFolder();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getResolverName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimeToResolve();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getResolutionDetails();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int32 record_id = 1;
 * @return {number}
 */
proto.ugh.Issue.prototype.getRecordId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ugh.Issue.prototype.setRecordId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string incident_type = 2;
 * @return {string}
 */
proto.ugh.Issue.prototype.getIncidentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setIncidentType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string incident_datetime = 3;
 * @return {string}
 */
proto.ugh.Issue.prototype.getIncidentDatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setIncidentDatetime = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string incident_description = 4;
 * @return {string}
 */
proto.ugh.Issue.prototype.getIncidentDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setIncidentDescription = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string cnxn = 5;
 * @return {string}
 */
proto.ugh.Issue.prototype.getCnxn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setCnxn = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string workflow = 6;
 * @return {string}
 */
proto.ugh.Issue.prototype.getWorkflow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setWorkflow = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string worklet = 7;
 * @return {string}
 */
proto.ugh.Issue.prototype.getWorklet = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setWorklet = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string session = 8;
 * @return {string}
 */
proto.ugh.Issue.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setSession = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string folder = 9;
 * @return {string}
 */
proto.ugh.Issue.prototype.getFolder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setFolder = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string resolver_name = 10;
 * @return {string}
 */
proto.ugh.Issue.prototype.getResolverName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setResolverName = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string time_to_resolve = 11;
 * @return {string}
 */
proto.ugh.Issue.prototype.getTimeToResolve = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setTimeToResolve = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string resolution_details = 12;
 * @return {string}
 */
proto.ugh.Issue.prototype.getResolutionDetails = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.ugh.Issue.prototype.setResolutionDetails = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


goog.object.extend(exports, proto.ugh);
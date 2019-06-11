/**
 * @fileoverview gRPC-Web generated client stub for ugh
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ugh = require('./ugh_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ugh.UghClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ugh.UghPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ugh.Empty,
 *   !proto.ugh.Issue>}
 */
const methodInfo_Ugh_GetAllIssues = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ugh.Issue,
  /** @param {!proto.ugh.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ugh.Issue.deserializeBinary
);


/**
 * @param {!proto.ugh.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ugh.Issue>}
 *     The XHR Node Readable Stream
 */
proto.ugh.UghClient.prototype.getAllIssues =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ugh.Ugh/GetAllIssues',
      request,
      metadata || {},
      methodInfo_Ugh_GetAllIssues);
};


/**
 * @param {!proto.ugh.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ugh.Issue>}
 *     The XHR Node Readable Stream
 */
proto.ugh.UghPromiseClient.prototype.getAllIssues =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/ugh.Ugh/GetAllIssues',
      request,
      metadata || {},
      methodInfo_Ugh_GetAllIssues);
};


module.exports = proto.ugh;

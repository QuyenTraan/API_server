"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../util");
var TinTucSchema = /** @class */ (function () {
    function TinTucSchema() {
        this._schema = {
            'noi_dung_id': {
                optional: true,
                isInt: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT
                }
            },
            'tieu_de': {
                optional: true,
                isString: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_STRING
                }
            },
            'value_int': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT + ' và >= 1'
                }
            },
            'value_decimal': {
                optional: true,
                isFloat: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_FLOAT + ' và >= 1'
                }
            },
            'value_boolean': {
                optional: true,
                isBoolean: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_BOOLEAN
                }
            },
            'value_time': {
                optional: true,
                isDate: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_DATE
                }
            },
            'tag_text': {
                optional: true,
                isArray: {
                    options: { isString: true },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_ARRAY + ' chứa chuỗi'
                }
            },
            'tag_int': {
                optional: true,
                isArray: {
                    options: { isInt: true },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_ARRAY + ' chứa số'
                }
            },
            'per_page': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT + ' và >= 0'
                }
            },
            'standard': {
                optional: true,
                isInStandardFormat: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_IN_STANDARD_FORMAT
                }
            },
            'page': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT + ' và >= 0'
                }
            },
            // 'current_status': {
            //     optional: true,
            //     isInRangeOfValue: {
            //         options: { range: NoiDungCurrentStatusEnum.values },
            //         errorMessage: `${VARIABLES.ValidatorMessage.IS_IN_RANGE_OF_VALUE} ${NoiDungCurrentStatusEnum.values}`
            //     }
            // },
            'user_create': {
                optional: true,
                isString: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_STRING
                }
            },
            'user_update': {
                optional: true,
                isString: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_STRING
                }
            }
        };
    }
    Object.defineProperty(TinTucSchema.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: true,
        configurable: true
    });
    return TinTucSchema;
}());
exports.TinTucSchema = TinTucSchema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvdGludHVjLW1pZGRsZXdhcmUvdGludHVjLXNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUF1QztBQUl2QztJQUdJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLGFBQWEsRUFBRTtnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUU7b0JBQ0gsWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTTtpQkFDbEQ7YUFDSjtZQUNELFNBQVMsRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxRQUFRLEVBQUU7b0JBQ04sWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUztpQkFDckQ7YUFDSjtZQUNELFdBQVcsRUFBRTtnQkFDVCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUU7b0JBQ0gsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFDbkIsWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFVBQVU7aUJBQy9EO2FBQ0o7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7b0JBQ25CLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxVQUFVO2lCQUNqRTthQUNKO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFNBQVMsRUFBRTtvQkFDUCxZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVO2lCQUN0RDthQUNKO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRTtvQkFDSixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPO2lCQUNuRDthQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRTtvQkFDTCxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUMzQixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsYUFBYTtpQkFDcEU7YUFDSjtZQUNELFNBQVMsRUFBRTtnQkFDUCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDeEIsWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFVBQVU7aUJBQ2pFO2FBQ0o7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFO29CQUNILE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7b0JBQ25CLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxVQUFVO2lCQUMvRDthQUNKO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJO2dCQUNkLGtCQUFrQixFQUFFO29CQUNoQixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUI7aUJBQ2pFO2FBQ0o7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFO29CQUNILE9BQU8sRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7b0JBQ25CLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxVQUFVO2lCQUMvRDthQUNKO1lBQ0Qsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0QiwwQkFBMEI7WUFDMUIsK0RBQStEO1lBQy9ELGdIQUFnSDtZQUNoSCxRQUFRO1lBQ1IsS0FBSztZQUNMLGFBQWEsRUFBRTtnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxRQUFRLEVBQUU7b0JBQ04sWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUztpQkFDckQ7YUFDSjtZQUNELGFBQWEsRUFBRTtnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxRQUFRLEVBQUU7b0JBQ04sWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUztpQkFDckQ7YUFDSjtTQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsc0JBQUksZ0NBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0F0R0EsQUFzR0MsSUFBQTtBQXRHWSxvQ0FBWSIsImZpbGUiOiJtaWRkbGV3YXJlL3RpbnR1Yy1taWRkbGV3YXJlL3RpbnR1Yy1zY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWQVJJQUJMRVMgfSBmcm9tICcuLi8uLi91dGlsJztcclxuXHJcbmltcG9ydCB7IFRpblR1Y0N1cnJlbnRTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW5UdWNTY2hlbWEge1xyXG4gICAgcHJpdmF0ZSBfc2NoZW1hO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3NjaGVtYSA9IHtcclxuICAgICAgICAgICAgJ25vaV9kdW5nX2lkJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfSU5UXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0aWV1X2RlJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc1N0cmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfU1RSSU5HXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd2YWx1ZV9pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzSW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBtaW46IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX0lOVCArICcgdsOgID49IDEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd2YWx1ZV9kZWNpbWFsJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0Zsb2F0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBtaW46IDEgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX0ZMT0FUICsgJyB2w6AgPj0gMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3ZhbHVlX2Jvb2xlYW4nOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzQm9vbGVhbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfQk9PTEVBTlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndmFsdWVfdGltZSc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNEYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19EQVRFXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd0YWdfdGV4dCc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNBcnJheToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgaXNTdHJpbmc6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX0FSUkFZICsgJyBjaOG7qWEgY2h14buXaSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhZ19pbnQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzQXJyYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGlzSW50OiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19BUlJBWSArICcgY2jhu6lhIHPhu5EnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdwZXJfcGFnZSc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNJbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IG1pbjogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfSU5UICsgJyB2w6AgPj0gMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3N0YW5kYXJkJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0luU3RhbmRhcmRGb3JtYXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX0lOX1NUQU5EQVJEX0ZPUk1BVFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAncGFnZSc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNJbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IG1pbjogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfSU5UICsgJyB2w6AgPj0gMCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gJ2N1cnJlbnRfc3RhdHVzJzoge1xyXG4gICAgICAgICAgICAvLyAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgIC8vICAgICBpc0luUmFuZ2VPZlZhbHVlOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgb3B0aW9uczogeyByYW5nZTogTm9pRHVuZ0N1cnJlbnRTdGF0dXNFbnVtLnZhbHVlcyB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGVycm9yTWVzc2FnZTogYCR7VkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfSU5fUkFOR0VfT0ZfVkFMVUV9ICR7Tm9pRHVuZ0N1cnJlbnRTdGF0dXNFbnVtLnZhbHVlc31gXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgICd1c2VyX2NyZWF0ZSc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdHJpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX1NUUklOR1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndXNlcl91cGRhdGUnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU3RyaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19TVFJJTkdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNjaGVtYSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NoZW1hO1xyXG4gICAgfVxyXG59Il19

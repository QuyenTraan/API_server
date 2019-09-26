"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../util");
var SenDoSchema = /** @class */ (function () {
    function SenDoSchema() {
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
    Object.defineProperty(SenDoSchema.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: true,
        configurable: true
    });
    return SenDoSchema;
}());
exports.SenDoSchema = SenDoSchema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvdGludHVjLW1pZGRsZXdhcmUvc2VuZG8tc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXVDO0FBSXZDO0lBR0k7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1gsYUFBYSxFQUFFO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRTtvQkFDSCxZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNO2lCQUNsRDthQUNKO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRTtvQkFDTixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2lCQUNyRDthQUNKO1lBQ0QsV0FBVyxFQUFFO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRTtvQkFDSCxPQUFPLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO29CQUNuQixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsVUFBVTtpQkFDL0Q7YUFDSjtZQUNELGVBQWUsRUFBRTtnQkFDYixRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFDbkIsWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLFVBQVU7aUJBQ2pFO2FBQ0o7WUFDRCxlQUFlLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsU0FBUyxFQUFFO29CQUNQLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLFVBQVU7aUJBQ3REO2FBQ0o7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFO29CQUNKLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU87aUJBQ25EO2FBQ0o7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLE9BQU8sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7b0JBQzNCLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxhQUFhO2lCQUNwRTthQUNKO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRTtvQkFDTCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO29CQUN4QixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsVUFBVTtpQkFDakU7YUFDSjtZQUNELFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUU7b0JBQ0gsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFDbkIsWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFVBQVU7aUJBQy9EO2FBQ0o7WUFDRCxVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLElBQUk7Z0JBQ2Qsa0JBQWtCLEVBQUU7b0JBQ2hCLFlBQVksRUFBRSxnQkFBUyxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQjtpQkFDakU7YUFDSjtZQUNELE1BQU0sRUFBRTtnQkFDSixRQUFRLEVBQUUsSUFBSTtnQkFDZCxLQUFLLEVBQUU7b0JBQ0gsT0FBTyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtvQkFDbkIsWUFBWSxFQUFFLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFVBQVU7aUJBQy9EO2FBQ0o7WUFDRCxzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLDBCQUEwQjtZQUMxQiwrREFBK0Q7WUFDL0QsZ0hBQWdIO1lBQ2hILFFBQVE7WUFDUixLQUFLO1lBQ0wsYUFBYSxFQUFFO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRTtvQkFDTixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2lCQUNyRDthQUNKO1lBQ0QsYUFBYSxFQUFFO2dCQUNYLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRTtvQkFDTixZQUFZLEVBQUUsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2lCQUNyRDthQUNKO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0wsa0JBQUM7QUFBRCxDQXRHQSxBQXNHQyxJQUFBO0FBdEdZLGtDQUFXIiwiZmlsZSI6Im1pZGRsZXdhcmUvdGludHVjLW1pZGRsZXdhcmUvc2VuZG8tc2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkFSSUFCTEVTIH0gZnJvbSAnLi4vLi4vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBTZW5Eb0N1cnJlbnRTdGF0dXNFbnVtIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZW5Eb1NjaGVtYSB7XHJcbiAgICBwcml2YXRlIF9zY2hlbWE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fc2NoZW1hID0ge1xyXG4gICAgICAgICAgICAnbm9pX2R1bmdfaWQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzSW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19JTlRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RpZXVfZGUnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU3RyaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19TVFJJTkdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3ZhbHVlX2ludCc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNJbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IG1pbjogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfSU5UICsgJyB2w6AgPj0gMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3ZhbHVlX2RlY2ltYWwnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzRmxvYXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IG1pbjogMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfRkxPQVQgKyAnIHbDoCA+PSAxJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndmFsdWVfYm9vbGVhbic6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNCb29sZWFuOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19CT09MRUFOXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd2YWx1ZV90aW1lJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0RhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX0RBVEVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3RhZ190ZXh0Jzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0FycmF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBpc1N0cmluZzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfQVJSQVkgKyAnIGNo4bupYSBjaHXhu5dpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAndGFnX2ludCc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNBcnJheToge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgaXNJbnQ6IHRydWUgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX0FSUkFZICsgJyBjaOG7qWEgc+G7kSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ3Blcl9wYWdlJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgbWluOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19JTlQgKyAnIHbDoCA+PSAwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnc3RhbmRhcmQnOiB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzSW5TdGFuZGFyZEZvcm1hdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfSU5fU1RBTkRBUkRfRk9STUFUXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdwYWdlJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc0ludDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgbWluOiAxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19JTlQgKyAnIHbDoCA+PSAwJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAnY3VycmVudF9zdGF0dXMnOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBvcHRpb25hbDogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gICAgIGlzSW5SYW5nZU9mVmFsdWU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBvcHRpb25zOiB7IHJhbmdlOiBOb2lEdW5nQ3VycmVudFN0YXR1c0VudW0udmFsdWVzIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZXJyb3JNZXNzYWdlOiBgJHtWQVJJQUJMRVMuVmFsaWRhdG9yTWVzc2FnZS5JU19JTl9SQU5HRV9PRl9WQUxVRX0gJHtOb2lEdW5nQ3VycmVudFN0YXR1c0VudW0udmFsdWVzfWBcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgJ3VzZXJfY3JlYXRlJzoge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpc1N0cmluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogVkFSSUFCTEVTLlZhbGlkYXRvck1lc3NhZ2UuSVNfU1RSSU5HXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICd1c2VyX3VwZGF0ZSc6IHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbmFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdHJpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFZBUklBQkxFUy5WYWxpZGF0b3JNZXNzYWdlLklTX1NUUklOR1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NoZW1hKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY2hlbWE7XHJcbiAgICB9XHJcbn0iXX0=

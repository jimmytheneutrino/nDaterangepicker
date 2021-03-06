'use strict';

(function(angular) {
  angular.module('nDaterangepicker', []);

  function PropertyUtil() {
    var getProperties = function(obj) {
      var result = {};

      for (var property in obj) {
        if (obj.hasOwnProperty(property) && typeof obj[property] != 'function') {
          result[property] = obj[property];
        }
      }

      return result;
    };

    return {
      getProperties: function(obj) {
        return getProperties(obj);
      }
    };
  }


  angular.module('nDaterangepicker')
    .service('DateRangePickerLocaleService', function() {
      this.applyLabel = 'Apply';
      this.cancelLabel = 'Cancel';
      this.fromLabel = 'From';
      this.toLabel = 'To';
      this.weekLabel = 'W';
      this.customRangeLabel = 'Custom Range';
      this.daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      this.firstDay = 0;

      this.setApplyLabel = function(applyLabel) {
        this.applyLabel = applyLabel;

        return this;
      };

      this.getApplyLabel = function() {
        return this.applyLabel;
      };

      this.setCancelLabel = function(cancelLabel) {
        this.cancelLabel = cancelLabel;

        return this;
      };

      this.getCancelLabel = function() {
        return this.cancelLabel;
      };

      this.setFromLabel = function(fromLabel) {
        this.fromLabel = fromLabel;

        return this;
      };

      this.getFromLabel = function() {
        return this.fromLabel;
      };

      this.setToLabel = function(toLabel) {
        this.toLabel = toLabel;

        return this;
      };

      this.getToLabel = function() {
        return this.toLabel;
      };

      this.setWeekLabel = function(weekLabel) {
        this.weekLabel = weekLabel;

        return this;
      };

      this.getWeekLabel = function() {
        return this.weekLabel;
      };

      this.setCustomRangeLabel = function(customRangeLabel) {
        this.customRangeLabel = customRangeLabel;

        return this;
      };

      this.getCustomRangeLabel = function() {
        return this.customRangeLabel;
      };

      this.setDaysOfWeek = function(daysOfWeek) {
        this.daysOfWeek = daysOfWeek;

        return this;
      };

      this.getDaysOfWeek = function() {
        return this.daysOfWeek;
      };

      this.setMonthNames = function(monthNames) {
        this.monthNames = monthNames;

        return this;
      };

      this.getMonthNames = function() {
        return this.monthNames;
      };

      this.setFirstDay = function(firstDay) {
        this.firstDay = firstDay;

        return this;
      };

      this.getFirstDay = function() {
        return this.firstDay;
      };

      this.getList = function() {
        return (PropertyUtil()).getProperties(this);
      };
    });

  angular.module('nDaterangepicker')
    .service('DateRangePickerService', function() {
      this.startDate;
      this.endDate;
      this.minDate;
      this.maxDate;
      this.dateLimit = false;
      this.timeZone = moment().utcOffset();
      this.showDropdowns = false;
      this.yearDecrement = 20;
      this.yearIncrement = 20;
      this.showWeekNumbers = false;
      this.timePicker = false;
      this.timePickerIncrement = 30;
      this.timePicker12Hour = false;
      this.timePickerSeconds = false;
      this.ranges = false;
      this.opens = 'right'; // 'left'/'right'/'center'
      this.drops = 'down'; // 'down'/'up'
      this.buttonClasses = ['btn', 'btn-small btn-sm'];
      this.applyClass = 'btn-success';
      this.cancelClass = 'btn-default';
      this.format = 'MM/DD/YYYY';
      this.formatMask = '^[0-1][0-9]\/[0-3][0-9]\/[0-9]{4}$';

      this.isoFormat = 'YYYY-MM-DDTHH:mm:ssZ';

      this.separator = ' - ';
      this.singleDatePicker = false;
      this.parentEl = '';

      this.iconBtnClasses = [];

      this.type = 'string';
      this.availableDateTypes = ['string', 'date', 'moment'];

      this.setStartDate = function(startDate) {
        this.startDate = startDate;

        return this;
      };

      this.getStartDate = function() {
        return this.startDate;
      };

      this.setEndDate = function(endDate) {
        this.endDate = endDate;

        return this;
      };

      this.getEndDate = function() {
        return this.endDate;
      };

      this.setMinDate = function(minDate) {
        this.minDate = minDate;

        return this;
      };

      this.getMinDate = function() {
        return this.minDate;
      };

      this.setMaxDate = function(maxDate) {
        this.maxDate = maxDate;

        return this;
      };

      this.getMaxDate = function() {
        return this.maxDate;
      };

      this.setDateLimit = function(dateLimit) {
        this.dateLimit = dateLimit;

        return this;
      };

      this.getDateLimit = function() {
        return this.dateLimit;
      };

      this.setTimeZone = function(timeZone) {
        this.timeZone = timeZone;

        return this;
      };

      this.getTimeZone = function() {
        return this.timeZone;
      };

      this.setShowDropdowns = function(showDropdowns) {
        this.showDropdowns = showDropdowns;

        return this;
      };

      this.isShowDropdowns = function() {
        return this.showDropdowns;
      };

      this.setYearDecrement = function(yearDecrement) {
        this.yearDecrement = yearDecrement;

        return this;
      };

      this.getYearDecrement = function() {
        return this.yearDecrement;
      };

      this.setYearIncrement = function(yearIncrement) {
        this.yearIncrement = yearIncrement;

        return this;
      };

      this.getYearIncrement = function() {
        return this.yearIncrement;
      };

      this.setShowWeekNumbers = function(showWeekNumbers) {
        this.showWeekNumbers = showWeekNumbers;

        return this;
      };

      this.isShowWeekNumbers = function() {
        return this.showWeekNumbers;
      };

      this.setTimePicker = function(timePicker) {
        this.timePicker = timePicker;

        return this;
      };

      this.isTimePicker = function() {
        return this.timePicker;
      };

      this.setTimePickerIncrement = function(timePickerIncrement) {
        this.timePickerIncrement = timePickerIncrement;

        return this;
      };

      this.getTimePickerIncrement = function() {
        return this.timePickerIncrement;
      };

      this.setTimePicker12Hour = function(timePicker12Hour) {
        this.timePicker12Hour = timePicker12Hour;

        return this;
      };

      this.isTimePicker12Hour = function() {
        return this.timePicker12Hour;
      };

      this.setTimePickerSeconds = function(timePickerSeconds) {
        this.timePickerSeconds = timePickerSeconds;

        return this;
      };

      this.isTimePickerSeconds = function() {
        return this.timePickerSeconds;
      };

      this.addRange = function(rangeName, range) {
        this.ranges[rangeName] = range;

        return this;
      };

      this.setRanges = function(ranges) {
        this.ranges = ranges;

        return this;
      };

      this.getRanges = function() {
        return this.ranges;
      };

      this.setOpens = function(opens) {
        this.opens = opens;

        return this;
      };

      this.getOpens = function() {
        return this.opens;
      };

      this.setDrops = function(drops) {
        this.drops = drops;

        return this;
      };

      this.getDrops = function() {
        return this.drops;
      };

      this.addButtonClass = function(buttonClass) {
        this.buttonClasses.push(buttonClass);

        return this;
      };

      this.setButtonClasses = function(buttonClasses) {
        this.buttonClasses = buttonClasses;

        return this;
      };

      this.getButtonClasses = function() {
        return this.buttonClasses;
      };

      this.setApplyBtnClass = function(applyClass) {
        this.applyClass = applyClass;

        return this;
      };

      this.getApplyBtnClass = function() {
        return this.applyClass;
      };

      this.setCancelBtnClass = function(cancelClass) {
        this.cancelClass = cancelClass;

        return this;
      };

      this.getCancelBtnClass = function() {
        return this.cancelClass;
      };

      this.setFormat = function(format) {
        this.format = angular.uppercase(format);

        return this;
      };

      this.getFormat = function() {
        return this.format;
      };

      this.setFormatMask = function(formatMask) {
        this.formatMask = formatMask;

        return this;
      };

      this.getFormatMask = function() {
        return this.formatMask;
      };

      this.setSeparator = function(separator) {
        this.separator = separator;

        return this;
      };

      this.getSeparator = function() {
        return this.separator;
      };

      this.setParentEl = function(parentEl) {
        this.parentEl = parentEl;

        return this;
      };

      this.getParentEl = function() {
        return this.parentEl;
      };

      this.addIconBtnClass = function(iconBtnClass) {
        this.iconBtnClasses.push(iconBtnClass);

        return this;
      };

      this.setIconBtnClasses = function(iconBtnClasses) {
        this.iconBtnClasses = iconBtnClasses;

        return this;
      };

      this.getIconBtnClasses = function() {
        return this.iconBtnClasses;
      };

      this.setType = function(type) {
        if (this.isValidDateType(type)) {
          this.type = type;
        }

        return this;
      };

      this.isValidDateType = function(type) {
        if (-1 == this.availableDateTypes.indexOf(type)) {
          throw new TypeError('Got type (' + type + ') and expected one of the following (' + this.availableDateTypes.join(',') + ')');
        }
        return true;
      };

      this.getType = function() {
        return this.type;
      };

      this.getList = function() {
        return (PropertyUtil()).getProperties(this);
      };
    });


  angular.module('nDaterangepicker')
    .directive('dateRangePicker', function($timeout, DateRangePickerService, DateRangePickerLocaleService, $log) {
      /*function printMoment(viewValue, format) {
        if (moment.isMoment(viewValue)) {
          //$log.debug('Moment date: ' + viewValue.format(format));
          //$log.debug('Moment isValid: ' + viewValue.isValid());
        }
      }*/

      return {
        restrict: 'A',
        require: '^ngModel',
        scope: {
          options: '@'
        },
        controller: function($scope, $parse) {
          var locale = angular.extend({}, DateRangePickerLocaleService.getList());

          if ($scope.options) {
            $scope.options = $parse($scope.options)();
          }

          if ($scope.options && $scope.options.locale) {
            locale = angular.extend(locale, $scope.options.locale);
            delete $scope.options.locale;
          }

          $scope.internalOptions = angular.extend({}, DateRangePickerService.getList(), {locale: locale}, $scope.options);

          DateRangePickerService.isValidDateType($scope.internalOptions.type);
        },
        link: function(scope, iElement, iAttrs, ngModelCtrl) {
          var el = angular.element(iElement),
            _init,
            _getPicker,
            _setViewValue,
            _setIsSingleDatePicker,
            _resetPicker,
            _resetPickerWithRender,
            _setRange,

            _formatted,
            _getMoment,
            _toType,
            _getDateToSet,

            _validate,
            _validateMin,
            _validateMax,
            _isEmpty,
            _isAcceptableDate,

            _tmpModelPlaceholder,
            _userInput,
            _persistentUserInput,
            _lastCatchableEvent;

          // Reset date
          if (scope.options && scope.options.identifier) {
            scope.$on(scope.options.identifier + 'Reset', function() {
              //$log.log('========== 1 [Reset event] ===========');
              return _resetPickerWithRender();
            });
          }

          ngModelCtrl.$formatters.push(function(modelValue) {
            //$log.log('========== 2 [$formatters] ===========');
            //$log.debug('modelValue');
            //$log.debug(modelValue);
            if (angular.isUndefined(_getPicker())) {
              //$log.log('========== 2.1 ===========');
              _setIsSingleDatePicker(modelValue);
              //$log.log('========== 2.2 ===========');
              _init(modelValue);
              //$log.log('========== 2.3 ===========');
            }
            else {
              //$log.log('========== 2.4 ===========');
              return modelValue;
            }

            if (_isEmpty(modelValue)) {
              //$log.log('========== 2.5 ===========');
              return '';
            }
            else {
              //$log.log('========== 2.6 ===========');
              return modelValue;
            }
          });

          ngModelCtrl.$parsers.push(function(viewValue) {
            //$log.log('========== 3 [$parsers] ===========');
            //$log.debug('viewValue');
            //$log.debug(viewValue);
            //printMoment(viewValue, scope.internalOptions.format);
            if (viewValue === null || !moment.isMoment(viewValue) && viewValue.length == 0) {
              //$log.log('========== 3.1 ===========');
              _tmpModelPlaceholder = null;
              return null;
            }

            if (!_isAcceptableDate(viewValue)) {
              //$log.log('========== 3.2 ===========');
              _userInput = viewValue;
              _persistentUserInput = viewValue;

              if (_isEmpty(_tmpModelPlaceholder)) { // @TODO Is needed?
                //$log.log('========== 3.3 ===========');
                return null;
              }

              //$log.log('========== 3.4 ===========');
              //$log.debug('ModelPlaceholder');
              //$log.debug(_tmpModelPlaceholder);
              //printMoment(_tmpModelPlaceholder, scope.internalOptions.format);

              return _toType(_tmpModelPlaceholder);
            }
            else {
              _userInput = undefined;
              _tmpModelPlaceholder = viewValue;
            }

            if (scope.internalOptions.singleDatePicker) {
              //$log.log('========== 3.5 ===========');
              _setRange(viewValue, viewValue);
              return _toType(viewValue);
            }
            else if (!angular.isObject(viewValue) || !(viewValue.hasOwnProperty('startDate') && viewValue.hasOwnProperty('endDate'))) {
              //$log.log('========== 3.6 ===========');
              return _toType(ngModelCtrl.$modelValue);
            }

            return _toType(viewValue);
          });

          ngModelCtrl.$validators.dateRequired = function(modelValue) {
            //$log.log('========== 29 [$validators][dateRequired] ===========');
            if (angular.isUndefined(iAttrs.dateRequired)) {
              //$log.log('========== 29.1 ===========');
              ngModelCtrl.$setValidity('required', true);
              return true;
            }

            //$log.log('========== 29.2 ===========');
            var isNotEmpty = !_isEmpty(modelValue);

            ngModelCtrl.$setValidity('required', isNotEmpty);
            return isNotEmpty;
          };

          var notLaterThan = function(model, compareTo) {
            //$log.log('========== 30 [$validators][notLaterThan] ===========');
            if (angular.isUndefined(compareTo) || compareTo === '') {
              //$log.log('========== 30.1 ===========');
              return true;
            }

            if (angular.isUndefined(model) || model === null) {
              //$log.log('========== 30.2 ===========');
              return true;
            }

            //$log.log('========== 30.3 ===========');
            var prepareDateString = compareTo.replace(/^"|"$/g, ''),
              momentDate = moment(prepareDateString, scope.internalOptions.format);

            if (!momentDate.isValid()) {
              //$log.log('========== 30.4 ===========');
              momentDate = moment(prepareDateString, scope.internalOptions.isoFormat);
            }

            if (!momentDate.isValid()) {
              //$log.log('========== 30.5 ===========');
              throw new Error('Passed in comparison model for "notLaterThan" validator is invalid!');
            }

            var modelAsMoment = _getMoment(model),
              preparedModelAsMoment = _getMoment(modelAsMoment.format(scope.internalOptions.format)),
              preparedMomentDate = _getMoment(momentDate.format(scope.internalOptions.format));

            return preparedModelAsMoment.isBefore(preparedMomentDate) || preparedModelAsMoment.isSame(preparedMomentDate);
          };

          scope.$watch(function() {
            return iAttrs.notLaterThan;
          }, function(newNotLaterThan) {
            ngModelCtrl.$setValidity('notLaterThan', notLaterThan(ngModelCtrl.$modelValue, newNotLaterThan));
          });

          ngModelCtrl.$validators.notLaterThan = function(modelValue) {
            return notLaterThan(modelValue, iAttrs.notLaterThan);
          };

          var notEarlierThan = function(model, compareTo) {
            //$log.log('========== 31 [$validators][notEarlierThan] ===========');
            if (angular.isUndefined(compareTo) || compareTo === '') {
              //$log.log('========== 31.1 ===========');
              return true;
            }

            if (angular.isUndefined(model) || model === null) {
              //$log.log('========== 31.2 ===========');
              return true;
            }

            //$log.log('========== 31.3 ===========');
            var prepareDateString = compareTo.replace(/^"|"$/g, ''),
              momentDate = moment(prepareDateString, scope.internalOptions.format);

            if (!momentDate.isValid()) {
              //$log.log('========== 31.4 ===========');
              momentDate = moment(prepareDateString, scope.internalOptions.isoFormat);
            }

            if (!momentDate.isValid()) {
              //$log.log('========== 31.5 ===========');
              throw new Error('Passed in comparison model for "notEarlierThan" validator is invalid!');
            }

            var modelAsMoment = _getMoment(model),
              preparedModelAsMoment = _getMoment(modelAsMoment.format(scope.internalOptions.format)),
              preparedMomentDate = _getMoment(momentDate.format(scope.internalOptions.format));

            return preparedModelAsMoment.isAfter(preparedMomentDate) || preparedModelAsMoment.isSame(preparedMomentDate);
          };

          scope.$watch(function() {
            return iAttrs.notEarlierThan;
          }, function(newNotEarlierThan) {
            ngModelCtrl.$setValidity('notEarlierThan', notEarlierThan(ngModelCtrl.$modelValue, newNotEarlierThan));
          });

          ngModelCtrl.$validators.notEarlierThan = function(modelValue) {
            return notEarlierThan(modelValue, iAttrs.notEarlierThan);
          };

          ngModelCtrl.$isEmpty = function(value) {
            //$log.log('========== 4 [$isEmpty] ===========');
            return _isEmpty(value);
          };

          ngModelCtrl.$render = function() {
            //$log.log('========== 5 [$render] ===========');
            if (!_isAcceptableDate(_userInput)) {
              //$log.log('========== 5.1 ===========');
              //$log.debug('User input');
              //$log.debug(_userInput);
              //$log.debug('Last captured event');
              //$log.debug(_lastCatchableEvent);
              return el.val(_lastCatchableEvent !== 'blur' ? _userInput : (function() {
                var result;

                //$log.log('========== 5.2 ===========');
                //$log.debug('ModelPlaceholder');
                //$log.debug(_tmpModelPlaceholder);
                if (moment.isMoment(_tmpModelPlaceholder)) {
                  //$log.log('========== 5.3 ===========');
                  //$log.debug('Moment date: ' + _tmpModelPlaceholder.format(scope.internalOptions.format));
                  //$log.debug('Moment isValid: ' + _tmpModelPlaceholder.isValid());

                  result = _tmpModelPlaceholder.format(scope.internalOptions.format);
                }
                else {
                  result = _isAcceptableDate(_tmpModelPlaceholder) ? _tmpModelPlaceholder : '';
                }

                return result;
              }));
            }

            if (!ngModelCtrl.$modelValue || ngModelCtrl.$modelValue.startDate === null) {
              //$log.log('========== 5.4 ===========');
              return el.val('');
            }

            //$log.log('========== 5.5 ===========');
            _validate(ngModelCtrl.$modelValue);

            //$log.log('========== 5.6 ===========');
            return el.val(_formatted(ngModelCtrl.$modelValue));
          };

          _init = function(initialValue) {
            //$log.log('========== 6 [_init] ===========');
            // @TODO Temporary
            if (!scope.internalOptions.singleDatePicker) {
              //$log.log('========== 6.1 ===========');
              throw new Error('Currently only single datepicker is supported!');
            }

            if (!_isEmpty(initialValue)) {
              //$log.log('========== 6.2 ===========');
              if (scope.internalOptions.singleDatePicker) {
                //$log.log('========== 6.3 ===========');
                scope.internalOptions.startDate = initialValue;
                scope.internalOptions.endDate = initialValue;
              }
              else {
                //$log.log('========== 6.4 ===========');
                scope.internalOptions.startDate = initialValue.startDate;
                scope.internalOptions.endDate = initialValue.endDate;
              }
            }

            el.daterangepicker(scope.internalOptions, function(start, end) {
              //$log.log('========== 7 [daterangepicker] ===========');
              return $timeout(function() {
                return scope.$apply(function() {
                  //$log.log('========== 7.1 ===========');
                  //$log.debug('Received start date:');
                  //$log.debug(start);
                  ////printMoment(start, scope.internalOptions.format);
                  //$log.debug('Received end date:');
                  //$log.debug(end);
                  ////printMoment(end, scope.internalOptions.format);

                  //$log.debug('Persistent user input');
                  //$log.debug(_persistentUserInput);
                  var userInputAsMoment = angular.isDefined(_persistentUserInput) && _persistentUserInput.length > 0
                    ? moment(_persistentUserInput, scope.internalOptions.format)
                    : undefined;

                  //$log.debug('Persistent user input as moment');
                  //$log.debug(userInputAsMoment);

                  if (moment.isMoment(start) && start.isValid() && moment.isMoment(end) && end.isValid()) {
                    if (angular.isUndefined(userInputAsMoment) || userInputAsMoment && start.diff(userInputAsMoment)) {
                      //$log.log('========== 7.2 ===========');
                      _setViewValue(start, end);
                      //$log.log('========== 7.3 ===========');
                    }
                  }

                  //$log.log('========== 7.4 ===========');

                  return ngModelCtrl.$render();
                });
              });
            });

            registerDestructor(function() {
              if (el.data('daterangepicker')) {
                el.data('daterangepicker').remove();
              }
            });

            if(scope.internalOptions.drops === 'dynamic') {
              var isVisibleBelow = function(element, container) {
                var totalHeight = element.offset().top + element.outerHeight() + container.outerHeight();

                return totalHeight <= $(window).height() + $(window).scrollTop();
              };

              var picker = _getPicker(),
                moveFn = picker.move;

              picker.move = function() {
                picker.drops = isVisibleBelow(el, picker.container) ? 'down' : 'up';
                moveFn.call(picker);
              }
            }
          };

          _getPicker = function() {
            //$log.log('========== 8 [_getPicker] ===========');
            return el.data('daterangepicker');
          };

          _setViewValue = function(startDate, endDate) {
            //$log.log('========== 9 [_setViewValue] ===========');
            if (!scope.internalOptions.singleDatePicker) {
              //$log.log('========== 9.1 ===========');
              ngModelCtrl.$setViewValue({
                startDate: startDate !== null ? _toType(startDate) : null,
                endDate: endDate !== null ? _toType(endDate) : null
              });
            }
            else {
              //$log.log('========== 9.2 ===========');
              ngModelCtrl.$setViewValue(startDate !== null ? _toType(startDate) : null);
            }
          };

          _setIsSingleDatePicker = function(value) {
            //$log.log('========== 10 [_setIsSingleDatePicker] ===========');
            if (value) {
              //$log.log('========== 10.1 ===========');
              scope.internalOptions.singleDatePicker = !value.hasOwnProperty('startDate') && !value.hasOwnProperty('endDate');
            }
            else {
              //$log.log('========== 10.2 ===========');
              scope.internalOptions.singleDatePicker = true;
            }
          };

          _resetPicker = function() {
            //$log.log('========== 11 [_resetPicker] ===========');
            var picker = _getPicker(),
              dateToSet = _getDateToSet(),
              dateToSetAsMoment = _getMoment(dateToSet.format(scope.internalOptions.format));

            //$log.debug('StartDate');
            //$log.debug(dateToSet.format(scope.internalOptions.format));

            //$log.debug('EndDate');
            //$log.debug(dateToSet.format(scope.internalOptions.format));

            //$log.log('========== 11.1 ===========');
            picker.setEndDate(dateToSetAsMoment);
            //$log.log('========== 11.2 ===========');
            picker.setStartDate(dateToSetAsMoment);
          };

          _resetPickerWithRender = function() {
            //$log.log('========== 28 [_resetPickerWithRender] ===========');
            return $timeout(function() {
              return scope.$apply(function() {
                //$log.log('========== 28.1 ===========');
                _resetPicker();
                //$log.log('========== 28.2 ===========');
                _setViewValue(null, null);
                //$log.log('========== 28.3 ===========');

                return ngModelCtrl.$render();
              });
            });
          };

          _setRange = function(startDate, endDate) {
            //$log.log('========== 12 [_setRange] ===========');
            var picker = _getPicker(),
              momentStartDate = _getMoment(startDate),
              momentEndDate = _getMoment(endDate);

            if (!momentStartDate.isValid()) {
              //$log.log('========== 12.1 ===========');
              throw new Error('Either invalid startDate was passed or invalid format. Please check!');
            }

            if (!momentEndDate.isValid()) {
              //$log.log('========== 12.2 ===========');
              throw new Error('Either invalid endDate was passed or invalid format. Please check!');
            }

            //$log.log('========== 12.3 ===========');
            //printMoment(momentEndDate);
            picker.setEndDate(momentEndDate);
            //$log.log('========== 12.4 ===========');
            //printMoment(momentStartDate);
            picker.setStartDate(momentStartDate);
            //$log.log('========== 12.5 ===========');
          };

          _formatted = function(viewVal) {
            //$log.log('========== 13 [_formatted] ===========');
            var f = function(date) {
                //$log.log('========== 13.2 ===========');
                return _getMoment(date).format(scope.internalOptions.format);
              },
              result = '';

            if (scope.internalOptions.singleDatePicker) {
              //$log.log('========== 13.1 ===========');
              result = f(viewVal);
            }
            else {
              //$log.log('========== 13.3 ===========');
              result = [f(viewVal.startDate), f(viewVal.endDate)].join(scope.internalOptions.separator);
            }

            return result;
          };

          _getMoment = function(date) {
            //$log.log('========== 14 [_getMoment] ===========');
            if (moment.isMoment(date)) {
              //$log.log('========== 14.1 ===========');
              return date;
            }
            else {
              //$log.log('========== 14.2 ===========');
              var result;

              if (date instanceof Date) {
                //$log.log('========== 14.3 ===========');
                result = moment(date);
              }
              else {
                //$log.log('========== 14.4 ===========');
                result = moment(date, scope.internalOptions.format);
              }

              return result;
            }
          };

          _toType = function(date) {
            //$log.log('========== 15 [_toType] ===========');
            var momentObj = _getMoment(date);

            switch (scope.internalOptions.type) {
              case 'moment': {
                //$log.log('========== 15.1 ===========');
                return momentObj;
              }

              case 'date': {
                //$log.log('========== 15.2 ===========');
                return momentObj.toDate();
              }

              default:
              case 'string': {
                //$log.log('========== 15.3 ===========');
                return momentObj.format(scope.internalOptions.format);
              }
            }
          };

          _getDateToSet = function() {
            //$log.log('========== 16 [_getDateToSet] ===========');
            var dateToSet,
              currentDate = moment(),
              maxDate = scope.internalOptions.maxDate,
              minDate = scope.internalOptions.minDate;

            if (maxDate && currentDate.isAfter(maxDate)) {
              //$log.log('========== 16.1 ===========');
              dateToSet = _getMoment(maxDate);
            }
            else if (minDate && currentDate.isBefore(minDate)) {
              //$log.log('========== 16.2 ===========');
              dateToSet = _getMoment(minDate);
            }
            else {
              //$log.log('========== 16.3 ===========');
              dateToSet = currentDate;
            }

            return dateToSet;
          };

          _validate = function(value) {
            //$log.log('========== 17 [_validate] ===========');
            var startDate = angular.isDefined(value.startDate) ? value.startDate : value,
              endDate = angular.isDefined(value.endDate) ? value.endDate : value;

            if (scope.internalOptions.minDate && startDate) {
              //$log.log('========== 17.1 ===========');
              _validateMin(scope.internalOptions.minDate, startDate);
            }
            else {
              //$log.log('========== 17.2 ===========');
              ngModelCtrl.$setValidity('minDate', true);
            }

            if (scope.internalOptions.maxDate && endDate) {
              //$log.log('========== 17.3 ===========');
              _validateMax(scope.internalOptions.maxDate, endDate);
            }
            else {
              //$log.log('========== 17.4 ===========');
              ngModelCtrl.$setValidity('maxDate', true);
            }
          };

          _validateMin = function(min, start) {
            //$log.log('========== 18 [_validateMin] ===========');
            var valid;

            min = _getMoment(min);
            //$log.log('========== 18.1 ===========');
            start = _getMoment(start);
            //$log.log('========== 18.2 ===========');
            valid = min.isBefore(start) || min.isSame(start, 'day');
            ngModelCtrl.$setValidity('minDate', valid);

            return valid;
          };

          _validateMax = function(max, end) {
            //$log.log('========== 19 [_validateMax] ===========');
            var valid;

            //$log.log('========== 19.1 ===========');
            max = _getMoment(max);
            //$log.log('========== 19.2 ===========');
            end = _getMoment(end);
            valid = max.isAfter(end) || max.isSame(end, 'day');
            ngModelCtrl.$setValidity('maxDate', valid);

            return valid;
          };

          _isEmpty = function(value) {
            //$log.log('========== 20 [_isEmpty] ===========');
            return angular.isUndefined(value) || value === null || value.length == 0 || (value.startDate === null
              || value.endDate === null);
          };

          _isAcceptableDate = function(date) {
            //$log.log('========== 21 [_isAcceptableDate] ===========');
            if (angular.isUndefined(date)) {
              //$log.log('========== 21.1 ===========');
              return true;
            }

            if (moment.isMoment(date)) {
              //$log.log('========== 21.2 ===========');
              date = date.format(scope.internalOptions.format);
            }

            return (new RegExp(scope.internalOptions.formatMask, 'g')).test(date) && _getMoment(date).isValid();
          };

          on(el, 'apply.daterangepicker', function(e, picker) {
            //$log.log('========== 22 [apply.daterangepicker] ===========');
            _lastCatchableEvent = e.type;
            return $timeout(function() {
              return scope.$apply(function() {
                //$log.log('========== 22.1 ===========');
                var start = _toType(picker.startDate);

                //$log.log(start);

                if (moment.isMoment(start)) {
                  start._isUTC = false;
                  delete start._offset;
                }

                var end = _toType(picker.endDate);

                //$log.log(end);

                if (moment.isMoment(end)) {
                  end._isUTC = false;
                  delete end._offset;
                }

                _setViewValue(start, end);
                //$log.log('========== 22.2 ===========');

                return ngModelCtrl.$render();
              });
            });
          });

          on(el, 'keydown', function(e) {
            //$log.log('========== 23 [keydown] ===========');
            _lastCatchableEvent = e.type;
            if (e.keyCode == 27) { // esc
              //$log.log('========== 23.1 ===========');
              _getPicker().hide();
              el.trigger('blur');
              //$log.log('========== 23.2 ===========');
            }
          });

          on(el, 'focus', function(e) {
            //$log.log('========== 24 [focus] ===========');
            _lastCatchableEvent = e.type;
            _userInput = undefined;
            if (ngModelCtrl.$modelValue === null || _isAcceptableDate(ngModelCtrl.$modelValue)) {
              //$log.log('========== 24.1 ===========');
              _tmpModelPlaceholder = ngModelCtrl.$modelValue;
            }
          });

          on(el, 'blur', function(e) {
            //$log.log('========== 25 [blur] ===========');
            _lastCatchableEvent = e.type;
            // @TODO Better solution?
            if (angular.element('.daterangepicker.show-calendar:visible').length > 0
              && _tmpModelPlaceholder === null) {
              //$log.log('========== 25.0 ===========');
              return;
            }

            //$log.debug('ModelPlaceholder');
            //$log.debug(_tmpModelPlaceholder);
            if (_tmpModelPlaceholder === null) {
              //$log.log('========== 25.1 ===========');
              return _resetPickerWithRender();
            }

            //$log.debug('UserInput');
            //$log.debug(_userInput);

            if (!_isAcceptableDate(_userInput) && _tmpModelPlaceholder !== null) {
              //$log.log('========== 25.6 ===========');
              //$log.debug('ModelPlaceholder');
              //$log.debug(_tmpModelPlaceholder);
              _setRange(_tmpModelPlaceholder, _tmpModelPlaceholder);
              //$log.log('========== 25.7 ===========');
            }
          });

          on(el, 'keyup.daterangepicker', function(event) {
            //$log.log('========== 26 [keyup.daterangepicker] ===========');
            event = event || window.event; // cross-browser event

            if (event.stopPropagation) {
              //$log.log('========== 26.1 ===========');
              // W3C standard variant
              event.stopPropagation();
            }
            else {
              //$log.log('========== 26.2 ===========');
              // IE variant
              event.cancelBubble = true;
            }

            // fallback
            event.stopImmediatePropagation();
          });

          // @TODO Better solution?
          // @NB! VERY FRAGILE
          on(angular.element(document), 'click', function(e) {
            //$log.log('========== 27 [document.click] ===========');
            var innerEl = angular.element(e.target),
              closestTable = innerEl.closest('table'),
              closestTableParent;

            if (angular.isDefined(closestTable) && closestTable.length) {
              //$log.log('========== 27.1 ===========');
              closestTableParent = closestTable.parent();
            }

            if (_lastCatchableEvent === 'blur' && (angular.isUndefined(closestTableParent) ||
              closestTableParent && !closestTableParent.hasClass('calendar-date')) && angular.isDefined(_getPicker())) {
              //$log.log('========== 27.2 ===========');
              _getPicker().hide();
            }
          });

          scope.$on('$destroy', cleanup);

          function on(el, event, handler) {
            if (angular.isUndefined(on.eventHolder)) {
              on.eventHolder = [];
            }
            el.on(event, handler);
            on.eventHolder.push({
              el: el,
              event: event,
              handler: handler
            });
          }
          function cleanupEvents() {
            if (angular.isArray(on.eventHolder)){
              on.eventHolder.forEach(function(o) {
                o.el.off(o.event, o.handler);
              });
              on.eventHolder.length = 0;
            }
          }
          function registerDestructor(f) {
            if (angular.isUndefined(registerDestructor.destructors)){
              registerDestructor.destructors = [];
            }
            registerDestructor.destructors.push(f);
          }
          function cleanupDesctructors() {
            if (angular.isArray(registerDestructor.destructors)) {
              registerDestructor.destructors.forEach(function (f) {
                f();
              });
            }
            registerDestructor.destructors.length = 0;
          }
          function cleanup() {
            cleanupEvents();
            cleanupDesctructors();
          }
        }
      };
    });

  angular.module('nDaterangepicker')
    .directive('shorthandDateRangePicker', function($log) {
      $log.warn('shorthandDateRangePicker directive might not work as expected!');

      return {
        restrict: 'E',
        scope: {
          identifier: '@',
          name: '@',
          withBtn: '@',
          resetable: '@',
          model: '=',
          options: '@'
        },
        template: function(tElement, tAttrs) {
          var template = '<input type="text" id="{{identifier}}" class="form-control" name="{{name}}" ng-model="model" options="options" date-range-picker />';

          if (tAttrs.withBtn == "true") {
            template = '' +
              '<div class="input-group date-range-picker">' +
              template +
              '<span class="input-group-btn">' +
              '<label type="button" class="btn btn-default date" for="{{identifier}}">' +
              '<i class="glyphicon glyphicon-calendar fa fa-calendar"></i>' +
              '</label>' +
              '</span>';
          }
          else {
            template = '' +
              '<div class="date-range-picker">' +
              template;
          }

          if (tAttrs.resetable == "true") {
            template += '<div class="input-group">' +
              '<button type="button" class="btn btn-link" title="Reset" ng-click="reset()" ng-show="model.startDate != null">Reset</button>' +
              '</div>';
          }

          template += '</div>';

          return template;
        },
        link: function(scope) {
          scope.reset = function() {
            scope.$broadcast(scope.identifier + 'Reset');
          };
        }
      };
    });
})(angular);

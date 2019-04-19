/* Copyright 2018 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an 'AS IS' BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
var tf_data_selector;
(function (tf_data_selector) {
    var Type;
    (function (Type) {
        Type[Type["WITHOUT_EXPERIMENT"] = 0] = "WITHOUT_EXPERIMENT";
        Type[Type["SINGLE"] = 1] = "SINGLE";
        Type[Type["COMPARISON"] = 2] = "COMPARISON";
    })(Type = tf_data_selector.Type || (tf_data_selector.Type = {}));
})(tf_data_selector || (tf_data_selector = {})); // namespace tf_data_selector
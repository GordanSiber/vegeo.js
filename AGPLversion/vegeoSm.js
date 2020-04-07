/*
 Copyright © 2020 by Gordan Šiber
 mail to: gordansibi@gmail.com

 Licensed under the GNU AFFERO GENERAL PUBLIC LICENSE, Version 3.0 (the "License") modified with Commons Clause
 Restriction; you may not use this file except in compliance with the License. You may obtain a
 copy of the License at
 https://www.gnu.org/licenses/agpl-3.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied. See the License for the specific language governing permissions
 and limitations under the License.

 Commons Clause Restriction
 The Software is provided to you by the Licensor under the License, as defined below, subject to
 the following condition.
 Without limiting other conditions in the License, the grant of rights under the License will not
 include, and the License does not grant to you, the right to Sell the Software.
 For purposes of the foregoing, “Sell” means practicing any or all of the rights granted to you
 under the License to provide to third parties, for a fee or other consideration (including without
 limitation fees for hosting or consulting/ support services related to the Software), a product or
 service whose value derives, entirely or substantially, from the functionality of the Software.
 Any license notice or attribution required by the License must also include this Commons Cause
 License Condition notice.

 For purposes of the clause above, the “Licensor” is Gordan Šiber, the “License” is the
 GNU AFFERO GENERAL PUBLIC LICENSE, Version 3.0, and the “Software” is the vegeoSm.js software
 provided with this notice.
*/

window.onload = function() {
 const content = document.getElementById('content');
 load = function(href){
  const request = new XMLHttpRequest();
  const url = '../content' + href.split().pop();
  request.open('GET',url, true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      let data = this.response;
      content.innerHTML=data;
   };
  };
  request.onerror = function(){};
  request.send();
 };
 function vegLi(e) {
    e.preventDefault();
    let active = document.querySelector('.current');
    active.classList.remove('current');
    this.classList.add('current');
    url = this.getAttribute("href");
    load(url);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 };
 const vegLiList = document.querySelectorAll('a[id^="veg"]');
 for (let i = 0; i < vegLiList.length; i++){
 vegLiList[i].addEventListener('click', vegLi, false);
 };
};
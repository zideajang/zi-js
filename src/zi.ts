import * as _ from "underscore";

interface funcA {
  (): boolean;
}

class Zi {
  /**
   *
   * */

  cat(...rest: any[]): any[] {
    let head = _.first(rest);
    if (this.existy(head)) {
      return head.concat.apply(head, _.rest(rest));
    } else {
      return [];
    }
  }

  construct<T>(head: T, tail: T): T[] {
    return this.cat([head], _.toArray(tail));
  }

  anyOf(...funs: Function[]): boolean  {
    return _.reduceRight(
      funs,
      function(truth, <any>f) {
        // return truth && f();
      },
      true
    );
  }

  //   allOf(...funs: any[]): boolean {}

  executeIfHasField(obj: any, fieldName: any): any {
    let self = this;
    return this.doWhen(this.existy(obj[fieldName]), function() {
      let result = _.result(obj, fieldName);
    });
  }
  private doWhen(cond: any, action: any): any {
    if (this.truthy(cond)) {
      return action();
    } else {
      return undefined;
    }
  }
  /**
   * 判断对象是否为空 false(false) undefined(false),0(true) ''(true)
   * @param a
   */
  truthy(a: any): boolean {
    return a !== false && this.existy(a);
  }
  /**
   * 检查对象是否为 null 或 undefined
   * @param a 任何类型
   */
  existy(a: any): boolean {
    return a != null;
  }

  second(a: any): any {
    this.nth(a, 1);
  }
  /**
   * 根据序号获取集合中的元素
   * @param a 可排序集合，数组或字符串
   * @param index 索引
   */
  nth(a: any, index: number): any {
    if (!this.isNumber(index)) this.fail("Expected a number as the index");
    if (!this.isIndexed(a)) this.fail("Not supported on non-indexed type");
    if (index < 0 || index > a.length - 1)
      this.fail("Index value is out of bounds");
    return a[index];
  }

  /**
   * 判断是否为集合，可以使数组，将字符串也看做集合
   * @param data 任意类型
   */
  isIndexed(data: any) {
    return this.isArray(data) || this.isString(data);
  }
  isNaN(obj: any): boolean {
    return this.isNumber(obj) && isNaN(obj);
  }

  isString(obj: any): boolean {
    return toString.call(obj) === "[object String]";
  }

  isNumber(obj: any) {
    return toString.call(obj) === "[object Number]";
  }
  /**
   * 判断是否为数组
   * @param obj
   */
  isArray(obj: any) {
    return toString.call(obj) === "[object Array]";
  }
  /**
   * 判断是否为函数
   * @param obj
   */
  isFunction(obj: any): boolean {
    return toString.call(obj) === "[object Function]";
  }
  warn(thing: any) {
    console.log(["warning:", thing].join);
  }
  note(thing: any) {
    console.log(["note: ", thing].join);
  }

  private fail(thing: any) {
    throw new Error(thing);
  }
}

let zi = new Zi();

console.log(zi.isNumber(1));
console.log(zi.existy(undefined));
console.log(zi.existy(null));
console.log(zi.existy(function() {}));
console.log(zi.cat([1, 2], [2, 3], [3, 4]));

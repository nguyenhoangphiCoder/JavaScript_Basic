// bai 1:  Cho một mảng các số nguyên nums và một số nguyên target, trả về chỉ số của hai số sao cho tổng của chúng bằngtarget .

// Bạn có thể giả định rằng mỗi đầu vào sẽ có chính xác một giải pháp và bạn không được sử dụng cùng một phần tử hai lần.

// Bạn có thể trả lời câu trả lời theo bất kỳ thứ tự nào.
let nums = [2, 7, 11, 15];
let Target = 9;

for (let i = 0; i <= nums.length; i++) {
  for (let j = 1; j <= nums.length; j++) {
    if (nums[i] + nums[j] === Target) {
      console.log(i, j);
    }
  }
}

// vd 2
let nums1 = [3, 2, 4];
let Target1 = 6;

for (let i = 0; i <= nums1.length; i++) {
  for (let j = 1; j <= nums1.length; j++) {
    if (nums1[i] + nums1[j] === Target1) {
      console.log(i, j);
    }
  }
}
// vd 3
let num = [3, 3];
let target = 6;

for (let i = 0; i < num.length; i++) {
  for (let j = 1; j < num.length; j++) {
    if (num[i] + num[j] === target) {
      console.log(i, j);
    }
  }
}

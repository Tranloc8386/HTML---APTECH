// function myPromise(isFail = false)
const myPromise = new Promise((resolve, reject) => {
  let ketqua = false;
  setTimeout(() => {
    if (ketqua) {
      reject("Tải thất bại!");
    } else {
      resolve("Tải thành công!");
    }
  }, 2000); // 
});

(async () => {
  try {
    const result = await myPromise;
    console.log("KQ (await):", result);
  } catch (err) {
    console.error("Lỗi (await):", err);
  }
})();
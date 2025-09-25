function myPromise(isFail = false)
 {
    return new Promise((resolve, reject) => 
     {
        setTimeout(() =>
             {
            if (isFail)
                 {
                reject("Tải thất bại!");
                 } else 
                {
                resolve("Tải thành công!");
                 }
             }, 2000); // 
    });
}
(async () => {
  try {
    const result = await myPromise(false);
    console.log("KQ (await):", result);
  } catch (err) {
    console.error("Lỗi (await):", err);
  }
})();
export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.2;
    return total;
  };
  const onClickPractice1 = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice1}>練習問題2を実行</button>
    </div>
  );
};

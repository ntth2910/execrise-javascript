let day=''
switch (new Date().getDate()) {
  case 0:
    day = "chu nhat";
    break;
  case 1:
    day = "thu 2";
    break;
  case 2:
    day = "thu 3";
    break;
  case 3:
    day = "thu 4";
    break;
  case 5:
    day = "thu 6";
    break;
  case 6:
    day = "thu 7";
}
console.log('hom nay la thu :', day, new Date().getDay())

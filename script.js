document.getElementById('btn').onclick = function () {
    var dept = document.getElementById('selDept').value;
    var title = document.getElementById('inpTitle').value;
    var name = document.getElementById('inpName').value;
    var usn = document.getElementById('inpUSN').value;
    var gt1 = document.getElementById('selTitle1').value;
    var gt2 = document.getElementById('selTitle2').value;
    var gname = document.getElementById('inpGname').value;
    module.exports = [dept, title, name, usn, gt1, gt2, gname];
}



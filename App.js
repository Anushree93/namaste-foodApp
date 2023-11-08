
{/* <div class="parentDiv">
    <div class="child1">This is child1</div>
    <div class="child2">This is child2</div>
</div>  */}

const heading = React.createElement("div",{className:'parentDiv'},
[React.createElement('div',{className:'child1'},'This is child1'),
React.createElement('div',{className:'child2'},'This is child2')]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
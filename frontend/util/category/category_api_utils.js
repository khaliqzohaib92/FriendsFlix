export const fetchCategories= ()=>{
    return $.ajax({
        url: 'api/categories'
    });
};
i make  const [topRestaurantList,setTopRestaurantList]=useState([]);
    const [copyRestaurantList,setCopyRestaurantList]=useState([]);

when i filter using input search then it filter main topRestaurantList and then store a copy of result to setCopyRestaurantList(filteredListBySearch);
 that means orginal list not manipulated and again if i search restaurant name then it filter again from topRestaurantList and then store this   setCopyRestaurantList(filteredListBySearch); 

 * that is important concept...........



 # important Note about fetching API :->
 when You try to fetch data from API make sure that you mention async and await in that Function.....


 # Custom HOOK :->  
 it is not Mandatory but it's good for Optimising Our Single Page Application , it's more readable , testable , maintainable , and reusable 
 i make my Custom HOOK named -- " useFetchRestaurantDetails "
                             -- " useOnlineStatus "

 # useParams (HOOK):-->
 it is a hook which helps us to get the ID from that URL & then we will use that ID and do whatever i need to do.

 # optimising App :--> 
 it has various name such as --   1. chunking (make big block of code to chunk pieces)
                                  2. lazy loading
                                  3. On demand Loading 
                                  4. Dynamic Bundling 
                                  5. Code Spliting


# Introducing Lazy Loading :-->

it is used in Larger scale Application for Optimising by making bundles of that big project  .Just fetch the data when we need it 

const About=lazy(()=>import("./components/About")) 
const About=lazy(()=>import("need to put Path..")) 

            and

<Suspense fallback={<h1>About page Loading...</h1>}><About/></Suspense>
we need to wrap up "<About/>" Component with "<Suspense/>" wrapper otherwise it will throw an error
fallback is a Placeholder.

# color :->
#E5E5CB 1st
#D5CEA3 2nd
#3C2A21 3rd
#1A120B 4th



# Higher Order Component :-->
i use this HOC to show " PROMOTED " Restaurant by Swiggy . what is HOC ? HOC is a Pure Function which takes Component and return a Components. what is Pure Function here ? ... Pure Func means i can not directly change it's code or Props which i take as a parameter . 


# Lifting Up State & Controlled and Uncontrolled Components :-->  (Very Important Stuff for Interview...)

=> I have Menucard.js (Parent) and RestaurantCategory.js (Child). I need one feature that when i click only show acordionListItem of that section and other will not . First i give full control of showing acordionListItem to every RestaurantCategory.js (Child) and that's why every child i mean RestaurantCategory.js (Child) works diffetently on their own.

So i give that power to control their click and show details using State variable to the Menucard.js (Parent) that is called 
" Lifting Up State " and Now RestaurantCategory.js (Child) is depend on Menucard.js (Parent) for showing details . 

now RestaurantCategory.js (Child) is called " Uncontrolled Component " &
    Menucard.js (Parent) is called " Controlled Component "#   F o o d - O r d e r i n g - A p p  
 #   F o o d - O r d e r i n g - A p p  
 #   F o o d - O r d e r i n g - A p p  
 
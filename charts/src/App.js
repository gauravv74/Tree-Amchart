import React, { useLayoutEffect } from 'react';
import './App.css';
import * as am5 from "@amcharts/amcharts5";

import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function App() {
  useLayoutEffect(() => {

    let root = am5.Root.new("chartdiv");
    const myTheme = am5.Theme.new(root);

    myTheme.rule("Label").setAll({
      fill: am5.color(0xFF0000),
      fontSize: "1em"
    });


    root.setThemes([
      am5themes_Animated.new(root),
      myTheme,

    ]);


    var container = root.container.children.push(am5.Container.new(root, {
      width: am5.percent(100),
      height: am5.percent(100),
      layout: root.verticalLayout
    }));



    // Create series
    var series = container.children.push(am5hierarchy.Tree.new(root, {
      singleBranchOnly: false,
      downDepth: 1,
      initialDepth: 10,
      valueField: "value",
      categoryField: "name",
      childDataField: "children",
      // orientation: "horizontal"
    }));
    // series.circles.template.adapters.add("scale", function() {
    //   return 1.5;
    // });
    // series.outerCircles.template.adapters.add("scale", function() {
    //   return 1.6;
    // });
    //=======================  
    series.circles.template.setAll({
      radius: 60,
      
    });
    series.outerCircles.template.setAll({
      radius: 60.1
    });

// Hide circles
// series.circles.template.set("forceHidden", true);
// series.outerCircles.template.set("forceHidden", true);


    //==========================
    var children1 = {
      "2023-04-18": {
        "Clearscore": {
          "Incomplete Pre-qualification": 2,
          "Total": 2
        },
        "CreditKarma": {
          "Incomplete Pre-qualification": 1,
          "Total": 1
        },
        "SmarterLoans": {
          "Incomplete Pre-qualification": 1,
          "Total": 3,
          "Knockout in pre-qualification": 2
        },
        "Others": {
          "Incomplete Pre-qualification": 7,
          "Total": 7
        }
      },
      "2023-04-17": {
        "Clearscore": {
          "Cancelled/Not Interested": 2,
          "Total": 12,
          "Knockout in pre-qualification": 4,
          "Rejected": 4,
          "WaitingForApproval": 1,
          "Waiting for Banking Verifications": 1
        },
        "CreditKarma": {
          "BankAccount_Verification": 1,
          "Total": 3,
          "Knockout in pre-qualification": 1,
          "Rejected": 1
        },
        "hs_automation": {
          "WaitingForApproval": 1,
          "Total": 1
        },
        "SmarterLoans": {
          "Knockout in pre-qualification": 1,
          "Total": 2,
          "Moved to Underwriting Queue": 1
        },
        "Others": {
          "BankAccount_Verification": 2,
          "Total": 14,
          "Cancelled/Not Interested": 1,
          "Incomplete Pre-qualification": 1,
          "Knockout in pre-qualification": 5,
          "Moved to TKL": 1,
          "Rejected": 3,
          "Spam": 1
        }
      },
      "2023-04-16": {
        "Clearscore": {
          "BankAccount_Verification": 1,
          "Total": 4,
          "Incomplete Pre-qualification": 1,
          "Rejected": 2
        },
        "CreditKarma": {
          "Rejected": 2,
          "Total": 2
        },
        "SmarterLoans": {
          "Knockout in pre-qualification": 2,
          "Total": 2
        },
        "Others": {
          "Knockout in pre-qualification": 1,
          "Total": 3,
          "Rejected": 2
        }
      },
      "2023-04-15": {
        "Borrowell": {
          "BankAccount_Verification": 1,
          "Total": 1
        },
        "Clearscore": {
          "Auto Rejected By TKL": 1,
          "Total": 6,
          "Closed_Canceled": 1,
          "Incomplete Pre-qualification": 1,
          "Rejected": 2,
          "WaitingForApproval": 1
        },
        "SmarterLoans": {
          "Knockout in pre-qualification": 3,
          "Total": 4,
          "Rejected": 1
        },
        "Others": {
          "BankAccount_Verification": 2,
          "Total": 5,
          "Incomplete Pre-qualification": 1,
          "Knockout in pre-qualification": 1,
          "Rejected": 1
        }
      },
      "2023-04-14": {
        "Clearscore": {
          "Auto Rejected By TKL": 1,
          "Total": 7,
          "BankAccount_Verification": 1,
          "Cancelled/Not Interested": 1,
          "Incomplete Pre-qualification": 1,
          "Rejected": 2,
          "Waiting for Banking Verifications": 1
        },
        "CreditKarma": {
          "Auto Rejected By TKL": 2,
          "Total": 4,
          "Knockout in pre-qualification": 1,
          "WaitingForApproval": 1
        },
        "GoPeer": {
          "Moved to TKL": 1,
          "Total": 2,
          "Rejected": 1
        },
        "SmarterLoans": {
          "Knockout in pre-qualification": 4,
          "Total": 4
        },
        "Others": {
          "Cancelled/Not Interested": 1,
          "Total": 8,
          "Closed_Canceled": 1,
          "Incomplete Pre-qualification": 1,
          "Knockout in pre-qualification": 1,
          "Rejected": 4
        }
      },
      "2023-04-13": {
        "borrowell": {
          "Closed_Canceled": 1,
          "Total": 2,
          "Rejected": 1
        },
        "Clearscore": {
          "BankAccount_Verification": 1,
          "Total": 4,
          "Closed_Canceled": 1,
          "Incomplete Pre-qualification": 1,
          "Knockout in pre-qualification": 1
        },
        "CreditKarma": {
          "Incomplete Pre-qualification": 1,
          "Total": 1
        },
        "hellosafe": {
          "Incomplete Pre-qualification": 1,
          "Total": 1
        },
        "SmarterLoans": {
          "Rejected": 1,
          "Total": 1
        },
        "Others": {
          "Auto Rejected By TKL": 2,
          "Total": 9,
          "BankAccount_Verification": 1,
          "Incomplete Pre-qualification": 1,
          "Knockout in pre-qualification": 1,
          "Rejected": 4
        }
      },
      "2023-04-12": {
        "Clearscore": {
          "Auto Rejected By TKL": 1,
          "Total": 9,
          "BankAccount_Verification": 1,
          "Closed_Canceled": 2,
          "Incomplete Pre-qualification": 1,
          "Knockout in pre-qualification": 3,
          "WaitingForApproval": 1
        },
        "hellosafe": {
          "Knockout in pre-qualification": 1,
          "Total": 1
        },
        "SmarterLoans": {
          "Closed_Canceled": 1,
          "Total": 6,
          "Knockout in pre-qualification": 4,
          "Rejected": 1
        },
        "Others": {
          "Cancelled in TKL": 2,
          "Total": 16,
          "Closed_Canceled": 1,
          "Incomplete Pre-qualification": 5,
          "Knockout in pre-qualification": 3,
          "Rejected": 2,
          "WaitingForApproval": 2,
          "Waiting for Banking Verifications": 1
        }
      }
    }
    // code============
    //     JSONObject object = new JSONObject ();
    // JSONArray keys = object.names ();

    // for (int i = 0; i < keys.length (); i++) {

    //    String key = keys.getString (i); // Here's your key
    //    String value = object.getString (key); // Here's your value

    // }
    //===================
    var newdata = {
      name: "Total_Applicant",

      children: [],
    }

    let overallTotalValue = 0;
    Object.entries(children1).map(([key, value]) => {


      let rootTotalValue = 0;
      var date = {
        name: key,
        value: key,
        children: [],
      }
      Object.entries(value).map(([k, v]) => {
        var newchild = {}
        newchild.name = k;
        newchild.children = [];
        let totalValue = 0;
        Object.entries(v).map(([k1, v1]) => {
          var newchild1 = {};
          newchild1.name = k1 + " : " + parseInt(v1);
          newchild1.children = [];
          newchild1.value = parseInt(v1);
          if (k1 !== 'Total') {
            newchild.children.push(newchild1);
            
          totalValue = totalValue + newchild1.value;
          }
          // newchild.children.push(newchild1);
        })
        newchild.name = k + " : " + totalValue;
        rootTotalValue = rootTotalValue + totalValue;
        date.children.push(newchild);
      })
      date.name = date.name + " : " + rootTotalValue;
      newdata.children.push(date);
      overallTotalValue = overallTotalValue + rootTotalValue;
    })
    //=====================
    newdata.name = newdata.name + " : " + overallTotalValue;
    series.data.setAll([newdata]);
    series.set("selectedDataItem", series.dataItems[0]);





    series.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <>
  
    <div id="chartdiv" style={{ width: "100%", height: "850px"}}></div>
  
    </>
    );
}
export default App;





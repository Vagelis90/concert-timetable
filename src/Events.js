import React, { Component } from "react";
import moment from "moment";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      currentEvents: [],
      nextEvents: [],
      view: props.state
    };
  }

  componentDidMount() {
    let events = [
      {
        Artist: "Âme",
        Start: "4:00",
        End: "5:00",
        Stage: "Warehouse Stage",
        Live: "Yes"
      },
      {
        Artist: "Anatolian Weapons",
        Start: "3:00",
        End: "5:00",
        Stage: "Outdoor Corner",
        Live: "No"
      },
      {
        Artist: "Angelo Ioakimoglu",
        Start: "21:30",
        End: "22:15",
        Stage: "Outdoor Corner",
        Live: "Yes"
      },
      {
        Artist: "Assumers",
        Start: "7:00",
        End: "8:00",
        Stage: "Warehouse Stage",
        Live: "Yes"
      },
      {
        Artist: "Athens Disco Kidz",
        Start: "18:00",
        End: "21:00",
        Stage: "Outdoor Corner",
        Live: "No"
      },
      {
        Artist: "Ben Klock",
        Start: "7:00",
        End: "11:00",
        Stage: "Photon Showcase",
        Live: "No"
      },
      {
        Artist: "Christian Löffler",
        Start: "21:30",
        End: "23:00",
        Stage: "Outdoor Stage",
        Live: "Yes"
      },
      {
        Artist: "Deep Dish",
        Start: "5:00",
        End: "7:00",
        Stage: "Outdoor Stage",
        Live: "No"
      },
      {
        Artist: "Dimitris Petsetakis",
        Start: "22:15",
        End: "23:00",
        Stage: "Outdoor Corner",
        Live: "Yes"
      },
      {
        Artist: "Discosodoma Soundsystem",
        Start: "0:30",
        End: "2:00",
        Stage: "Warehouse Stage",
        Live: "No"
      },
      {
        Artist: "DVS1",
        Start: "1:00",
        End: "4:00",
        Stage: "Photon Showcase",
        Live: "No"
      },
      {
        Artist: "Dynamons",
        Start: "21:00",
        End: "21:30",
        Stage: "Outdoor Corner",
        Live: "No"
      },
      {
        Artist: "Etapp Kyle",
        Start: "22:00",
        End: "1:00",
        Stage: "Photon Showcase",
        Live: "No"
      },
      {
        Artist: "Forest Swords",
        Start: "20:30",
        End: "21:30",
        Stage: "Outdoor Stage",
        Live: "Yes"
      },
      {
        Artist: "Gerd Janson",
        Start: "1:00",
        End: "3:00",
        Stage: "Outdoor Stage",
        Live: "No"
      },
      {
        Artist: "Kiasmos",
        Start: "23:00",
        End: "1:00",
        Stage: "Outdoor Stage",
        Live: "No"
      },
      {
        Artist: "Kittin",
        Start: "2:00",
        End: "4:00",
        Stage: "Warehouse Stage",
        Live: "No"
      },
      {
        Artist: "Livia",
        Start: "8:00",
        End: "11:00",
        Stage: "Warehouse Stage",
        Live: "No"
      },
      {
        Artist: "Marcel Dettman",
        Start: "4:00",
        End: "7:00",
        Stage: "Photon Showcase",
        Live: "No"
      },
      {
        Artist: "Miltiades.",
        Start: "23:00",
        End: "0:00",
        Stage: "Outdoor Corner",
        Live: "Yes"
      },
      {
        Artist: "Mind Against",
        Start: "5:00",
        End: "7:00",
        Stage: "Warehouse Stage",
        Live: "No"
      },
      {
        Artist: "Nastia",
        Start: "3:00",
        End: "5:00",
        Stage: "Outdoor Stage",
        Live: "No"
      },
      {
        Artist: "Sworr.",
        Start: "19:30",
        End: "20:30",
        Stage: "Outdoor Stage",
        Live: "Yes"
      },
      {
        Artist: "Tendts",
        Start: "22:30",
        End: "23:30",
        Stage: "Warehouse Stage",
        Live: "Yes"
      },
      {
        Artist: "Territroy",
        Start: "23:30",
        End: "0:30",
        Stage: "Warehouse Stage",
        Live: "Yes"
      },
      {
        Artist: "Venus Volcanism & In Atlas",
        Start: "1:00",
        End: "2:00",
        Stage: "Outdoor Corner",
        Live: "Yes"
      },
      {
        Artist: "ΗΧΟΤΟΠίΑ",
        Start: "2:00",
        End: "3:00",
        Stage: "Outdoor Corner",
        Live: "Yes"
      }
    ];

    let currentEvents = events.filter(item => {
      let now = moment();
      let start = moment(item.Start, "HH:mm");
      let end = moment(item.End, "HH:mm");
      if (end.isBefore(start) === true) start.subtract(1, "days");
      return moment(now).isBetween(start, end);
    });

    // let stages = [...new Set(events.map(item => item.Stage))];
    // stages.forEach(stage => {
    //   let stageEvents = events.filter(item => item.Stage === stage);
    //   let now = currentEvents.find(item => item.Stage === stage);
    //   if(typeof now !== "undefined"){
    //     console.log(now);
    //     let start = moment(now);
    //     console.log(start);
    //     let next = stageEvents.find(item => moment(start).isAfter(now.End) === true);
    //     console.log("Next event: ", next);
    //   }
    // })

    // console.log(stages);
    let nextEvents = events.filter(item => {});

    this.setState({ events, currentEvents, nextEvents });
  }

  render() {
    let view = this.state.currentEvents; // defaults to current
    if (this.state.view === "all") view = this.state.events;
    if (this.state.view === "next") view = this.state.nextEvents;

    return (
      <div>
        <table className="table table-striped table-dark">
          <thead>
            <tr className="bg-danger">
              <th>Artist</th>
              <th>Start</th>
              <th>End</th>
              <th>Stage</th>
            </tr>
          </thead>
          <tbody>
            {view.map((item, index) => {
              return (
                <tr key={`event-${index}`}>
                  <td>
                    {item.Live === "Yes" ? (
                      <div>
                        <a
                          target="_blank"
                          href={
                            "https://www.youtube.com/results?search_query=" +
                            item.Artist
                          }
                        >
                          {item.Artist}
                        </a>{" "}
                        <span className="badge badge-danger">Live</span>
                      </div>
                    ) : (
                      <a
                        target="_blank"
                        href={
                          "https://www.youtube.com/results?search_query=" +
                          item.Artist
                        }
                      >
                        {item.Artist}
                      </a>
                    )}
                  </td>
                  <td>{item.Start}</td>
                  <td>{item.End}</td>
                  <td>{item.Stage}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Events;
